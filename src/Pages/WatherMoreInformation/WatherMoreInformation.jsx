import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


import Loader from '../../Components/Custom/Loader/Loader'
import MoreInformationCity from '../../Components/Home/MoreInformationCity/MoreInformationCity'
import Error from '../Error/Error'

const WatherMoreInformation = () => {

    const city = useParams();

	const [moreCityData, setMoreCityData] = useState(null);

	const [loader, setLoader] = useState(false)

	useEffect(() => {
		const handleMoreCitytData = async () => {
		setLoader(true);
		const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.name}&units=metric&appid=3eee2f7fbbf38f65d3a0a34e21b03428`);
		const result = await response.json();
		setMoreCityData(result);
		setLoader(false);	
		};

		handleMoreCitytData();
	}, [city.name]);
    return (
        <div className="flex flex-col md:flex-wrap justify-center aling-center m-auto w-full max-w-lg">
			{
				loader? <Loader/> : null
			}
			{
				moreCityData? moreCityData.cod !== 200? 
					<Error 
						error={moreCityData.cod} 
						message={moreCityData.message} 
					/> : 
					<MoreInformationCity 
						city={moreCityData.name}
						country={moreCityData.sys.country}
						mainWeather={moreCityData.weather[0].main}
						weather={moreCityData.weather[0].description} 
						img={moreCityData.weather[0].icon}
						temp={moreCityData.main.temp}
						feelsLike={moreCityData.main.feels_like}
						tempMin={moreCityData.main.temp_min}
						tempMax={moreCityData.main.temp_max}
						wind={moreCityData.wind.speed}
						humidity={moreCityData.main.humidity}
						pressure={moreCityData.main.pressure}
					/> : null 
			}
	
		</div>
    )
}

export default WatherMoreInformation
