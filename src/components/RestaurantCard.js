import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: '#f0f0f0',
  };
  
  const RestaurantCard = (props) => {
    return (
      <div className='res-card' style={styleCard}>
        <img
          className='res-logo'
          src={
            CDN_URL +
            props.resData.card.card.info.cloudinaryImageId
          }
        />
        <h3>{props.resData.card.card.info.name}</h3>
        <h4>{props.resData.card.card.info.cuisines.join(', ')}</h4>
        <h4>{props.resData.card.card.info.avgRatingString}</h4>
      </div>
    );
  };

  export default RestaurantCard;