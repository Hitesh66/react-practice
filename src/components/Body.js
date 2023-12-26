import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from 'react';
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
    //console.log(resList);
    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");


     const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2262474&lng=73.1587704&collection=83647&tags=layout_CCS_Chinese&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

        const json = await data.json();
        console.log(json.data.cards);
        setListOfRestaurant(json.data.cards.slice(3));
        setFilteredRestaurant(json.data.cards.slice(3));
        // setListOfRestaurant(resList)
    };

    useEffect(()=>{
        fetchData();
    },[]);

    //Conditional Rendering
    // if(listOfRestaurant.length === 0){
    //     return <Shimmer />
    // }

    return listOfRestaurant.length === 0 ? <Shimmer /> :  (
      <div className='body'>
        <div className='filter'>
            <input type="text" className="search-box" value={searchText} 
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}/>
            <button onClick={()=>{
                const filteredRest = listOfRestaurant.filter((rest) => rest.card.card.info.name.includes(searchText));
                setFilteredRestaurant(filteredRest);
            }}>Search</button>
            <button className="filter-btn" onClick={()=>{
                const filteredList = listOfRestaurant.filter((res)=>{return res.card.card.info.avgRating > 4.2});
                setListOfRestaurant(filteredList);
            }}>Top Rated Restaurants</button>
        </div>
        <div className='res-container'>
          {filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
export default Body;
