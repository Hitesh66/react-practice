import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from 'react';
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    //console.log(resList);
    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");


     const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2262474&lng=73.1587704&collection=80439&tags=layout_CCS_PureVeg&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

        const json = await data.json();
        console.log(json.data.cards);
        setListOfRestaurant(json.data.cards.slice(3));
        setFilteredRestaurant(json.data.cards.slice(3));
        // setListOfRestaurant(resList)
    };

    useEffect(()=>{
        if(onlineStatus)
            fetchData();
    },[]);

    //Conditional Rendering
    // if(listOfRestaurant.length === 0){
    //     return <Shimmer />
    // }

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus) return <h1>Looks like you're offline Please check your Internet connection.</h1>

    return listOfRestaurant.length === 0 ? <Shimmer /> :  (
      <div className='body'>
        <div className='filter m-4 p-4'>
            <input type="text" className="border border-solid border-black" value={searchText} 
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}/>
            <button className="px-4 py-2 bg-green-200 m-4 rounded-lg" onClick={()=>{
                const filteredRest = listOfRestaurant.filter((rest) => rest.card.card.info.name.includes(searchText));
                setFilteredRestaurant(filteredRest);
            }}>Search</button>
            <button className="px-4 py-2 bg-green-200 m-4 rounded-lg" onClick={()=>{
                const filteredList = listOfRestaurant.filter((res)=>{return res.card.card.info.avgRating > 4.2});
                setListOfRestaurant(filteredList);
            }}>Top Rated Restaurants</button>
        </div>
        <div className='flex flex-wrap'>
          {filteredRestaurant.map((restaurant) => (
            <Link to={"/restaurants/"+restaurant.card.card.info.id} key={restaurant.card.card.info.id}><RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} /></Link>
          ))}
        </div>
      </div>
    );
  };
export default Body;
