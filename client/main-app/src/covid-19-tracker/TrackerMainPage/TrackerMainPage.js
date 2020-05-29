import React from 'react';

import Cards from '../component/Cards/Cards';
import Chart from '../component/Chart/Chart';
import CountryPicker from '../component/CountryPicker/CountryPicker';
import {fetchData} from '../api';
import styles from './TrackerMainPage.module.css';
import coronaImage from '../images/image.png';
class TrackerMainPage extends React.Component{

    state= {
        data: {},
        country: '',
    }


    async componentDidMount(){
        const fetchedData  = await fetchData();
        this.setState({data:fetchedData });
    }

    handleCountryChange = async (country) => {
       const fetchedData = await fetchData(country);
       this.setState({data:fetchedData, country: country });
    }
    render(){
        const {data,country} =  this.state;

    return( 
    <div className = {styles.container}>
        <img className={styles.image} src={coronaImage} alt='covid-19' />
       <Cards data={data} />
       <CountryPicker handleCountryChange={this.handleCountryChange}/>
       <Chart data={data} country={country}/>
    </div>
    )
    }
}
    

export default TrackerMainPage;