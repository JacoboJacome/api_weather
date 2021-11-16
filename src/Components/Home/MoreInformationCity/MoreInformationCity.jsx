import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTemperatureLow, faTemperatureHigh } from "@fortawesome/free-solid-svg-icons"


const MoreInformationCity = (props) => {
    const {
		city, 
		country, 
		img, 
		mainWeather, 
		weather, 
		temp,
		feelsLike,
		tempMin,
		tempMax,
		humidity,
		pressure,
		wind
	} = props

    return (
        <section className="flex flex-col items-center w-full text-black md:flex-warp">
			<div className="flex justify-center min-w-full p-2 mb-6 bg-white rounded-xl">
				<p className="font-bold text-2xl">{city} , <span className="text-2xl font-bold">{country}</span></p>
			</div>

			<div className="flex aling-center justify-center aling-center px-10 py-8 mb-4 shadow-md bg-blue-200 rounded-lg bg-blue">
				<div className="my-auto">
					<img src={`http://openweathermap.org/img/wn/${img}@2x.png`} className="mx-6" alt="weather-logo"/>
					<h4 className="text-3xl font-bold mx-6">{mainWeather}</h4>
					<p className=" mx-6">{weather}</p>
				</div>
				<div className=" my-auto">
					<p className="mb-2 mx-6 text-6xl font-bold">{Math.trunc(temp)}°</p>
					<p>Feels Like <span className="ml-2 mx-6 font-bold">{feelsLike}°</span></p>
				</div>
			</div>
            <div className="flex flex-wrap md:flex-row">

			<div className="flex justify-center aling-center py-8 mb-6 bg-blue-200 mx-auto shadow-md rounded-xl md:flex-col md:mx-4">
				<p className="px-2 text-center mx-6 md:py-2 md:my-1">Wind<br/><span className="font-bold">{wind}m/s</span></p>
				<p className="px-2 text-center mx-6 md:py-2 md:my-1">Humidity<br/><span className="font-bold">{humidity}%</span></p>
				<p className="px-2 text-center mx-6 md:py-2 md:my-1">Pressure<br/><span className="font-bold">{pressure}hPa</span></p>
			</div>

			<div className=" p-8 mb-8 bg-blue-200 shadow-md text-center aling-center justify-center rounded-xl mx-auto md:flex-col md:mx-4 md:py-10">
				<div>
					<p className="mb-2 font-bold">Temp</p>
					<div className="flex items-center p-4">
						<FontAwesomeIcon icon={faTemperatureLow} className="text-2xl"/>
						<p className="flex justify-between w-full ml-4">Min <span className="text-base font-bold">{tempMin}°</span></p>
					</div>
					<div className="flex items-center p-4">
						<FontAwesomeIcon icon={faTemperatureHigh} className="text-2xl"/>
						<p className="flex justify-between w-full ml-4">Max <span className="font-bold">{tempMax}°</span></p>
					</div>
				</div>
			</div>
            </div>

			<button className="px-6 py-2 bg-blue-300 rounded-full hover:bg-blue-800 hover:text-white font-bold shadow-md text-balck">
				<Link to="/">
					Return to home
				</Link>
			</button>
		</section>
    )
}

export default MoreInformationCity
