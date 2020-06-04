import React from 'react';
import { connect } from 'react-redux';
import { loadRestaurants } from '../../store/actions';

import SearchBar from '../component/SearchBar';
import FilterBar from '../component/FilterBar';
import RestaurantList from '../component/RestaurantList';
import RestaurantDetail from '../component/RestaurantDetail';
import './mainpage.scss';
class OpentableMainPage extends React.Component{

    render(){
    return( 
        <div className="page">
          <div className="search-area">
           <SearchBar />
           <FilterBar />

         </div>
         <div className="display-area">
          <RestaurantList />
          <RestaurantDetail />
        </div>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
      restaurants: state.restaurants
    }
  }
  export default connect(
    mapStateToProps,
    { loadRestaurants }
  )(OpentableMainPage);

