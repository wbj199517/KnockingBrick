import React, { useState,useEffect } from "react";
import { connect } from 'react-redux';
import { loadKeyWord } from '../../store/actions';
import './FilterBar.scss';
const FilterBar = ({loadKeyWord}) => {
    const [keyword, setSearchKeyword] = useState('');
    useEffect(() => {
        loadKeyWord(keyword);
      }, [keyword,loadKeyWord]);



    const handleFilter = e => {
        setSearchKeyword(e.target.value);
       
    }
 
  return (
    <div>
        <input className="filter-input" type="text" value={keyword} onChange={handleFilter} placeholder="Filter name,address,phone number or postcode" />
    </div>
  );
}


  export default connect(
    null,
    { loadKeyWord }
  )(FilterBar);