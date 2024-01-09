import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: '#f0f0f0',
  };
  
  const RestaurantCard = (props) => {
    //console.log(props);
    return (
      <div className='m-4 p-4 w-[200px]' style={styleCard}>
        <img
          className='rounded-lg h-[150px] w-[200px]'
          src={
            CDN_URL +
            props.resData.card.card.info.cloudinaryImageId
          }
        />
        <h3 className="font-bold py-4 text-xl">{props.resData.card.card.info.name}</h3>
        <h4>{props.resData.card.card.info.cuisines.join(', ')}</h4>
        <h4>{props.resData.card.card.info.avgRatingString}</h4>
      </div>
    );
  };

  export default RestaurantCard;