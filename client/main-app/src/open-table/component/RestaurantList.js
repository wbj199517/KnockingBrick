import React, {useState,useEffect} from "react";
import { connect } from 'react-redux';
import { selectRestaurant } from '../../store/actions';
import './RestaurantList.scss';

const RestaurantList = ({selectRestaurant,restaurants,keyword}) => {


const [filteredData, setFilteredData] = useState([]);
useEffect(() => {
    setFilteredData(filterByKeyword(restaurants,keyword));
  }, [keyword,restaurants]);
  return (
    <div className="restaurant-list">
        
       {filteredData&&filteredData.length>0&&filteredData.map(r=>
          <div className="restaurant" key={r.id} onClick={() => selectRestaurant(r)}>
          <div>{r.name}</div>
          <div>{'$'.repeat(r.price)}</div>
          <img className="thumbnail" src={r.image_url} alt='restaurant' />
          </div>
       )}
    </div>
  );
}

const filterByKeyword = (data, keyword) => {
    if (keyword) {
      return data ? data.filter(
        (r) => r.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
            || r.address.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
            || r.postal_code.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
            || r.phone.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      ) : [];
    } else {
      return data;
    }
  }

const mapStateToProps = (state) => ({ restaurants: state.restaurants, keyword:state.keyword });

  export default connect(
    mapStateToProps,
    { selectRestaurant }
  )(RestaurantList);