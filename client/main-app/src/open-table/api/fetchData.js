import axios from 'axios';

const url = 'http://opentable.herokuapp.com/api/restaurants';

export const fetchData = async (city) => {
    let changeableUrl = url;
    if(city){
        changeableUrl = `${url}?city=${city}`
    }
    try{
        const {data:{restaurants}}  =  await axios.get(changeableUrl);
            //destruction
        return restaurants;
    }catch(err){
        console.log(err)
        window.alert('Please enter a city name in the search bar');
    }
}

      