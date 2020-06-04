import React, { useState } from "react";
import { connect } from 'react-redux';
import { loadRestaurants } from '../../store/actions';
import { fetchData } from '../api/fetchData';
const SearchBar = ({loadRestaurants}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
        onSearch(searchTerm.toLowerCase());
    }
  }
  const onButtonClick = () =>{
      onSearch(searchTerm.toLowerCase());
  }
  const onSearch = async (searchTerm) => {
    const fetchedRestaurants  = await fetchData(searchTerm);
    if(searchTerm.length>0){
    loadRestaurants(fetchedRestaurants);
    
}
  }

  return (
    <div>
        <input type='text' placeholder="Enter City ..." value={searchTerm} onChange={handleChange} onKeyPress={onKeyPress} />
        <button onClick={onButtonClick}>Search</button> 
    </div>
  );
}



  export default connect(
    null,
    { loadRestaurants }
  )(SearchBar);