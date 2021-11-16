import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import InformationCity from '../../Components/Home/InformationCity/InformationCity'
import Loader from '../../Components/Custom/Loader/Loader'

const WatherInformation = () => {
    const city = useParams ();
    const [loader, setLoader] = useState(false);
    const [weatherCity, setWeatherCity] = useState({})
    

    useEffect(() =>{
        const handleSearchWeather = async e => {
            e.preventDefault();
            setWeatherCity(null);
            setLoader(true);
            const API = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=3eee2f7fbbf38f65d3a0a34e21b03428`;
            const response = await fetch(API);
            const result = await response.json();
            console.log(result)
            setWeatherCity(result);
            setLoader(false);
          };
          handleSearchWeather();
    }, [city])

    return (
        <div>
            <InformationCity 
              name={weatherCity?.name}
              temp={weatherCity?.main.temp}
              country={weatherCity?.sys.country}
            />
        </div>
    )
}

export default WatherInformation
