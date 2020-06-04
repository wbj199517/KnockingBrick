import React from "react";
import { connect } from 'react-redux';
import './RestaurantDetail.scss';


const RestaurantDetail = ({restaurant}) => {
  


  return (
      
    <div className="detail">
        {restaurant&&<div>
        <img className= "large-image" src={restaurant.image_url} alt='restaurant' />
         <div className= "content">
            <div className="name">{restaurant.name}</div>
  
            <div className="info">Address:&nbsp;{restaurant.address}</div>
            <div  className="info">Phone:&nbsp; {restaurant.phone}</div>
            <div  className="info">Postal Code:&nbsp;{restaurant.postal_code}</div>
            <div className="info">
                Reserve Here:&nbsp;
                <a href={restaurant.reserve_url}>Reserve</a>
            </div>
            
         </div>
        </div>
        }
    </div>
  );
}
const mapStateToProps = (state) => {
    return {
      restaurant: state.restaurant
    }
  }

  export default connect(
    mapStateToProps,
    null
  )(RestaurantDetail);