import React from 'react'

import {Link} from "react-router-dom"

const InformationCity = props => {
    const{
        name,
        temp,
        weather,
        img,
    } = props;

    return (
        <div>
            <div className="w-4/5 rounded-xl border-2 border-blue-500 my-16 m-auto bg-gray-100 shadow-lg">
                <div className="card-body flex justify-evenly items-center py-4">
                    <p>
                        <span className="text-blue-500 rounded-full p-1 text-xl	font-bold"> Name: </span>{" "}
                        {name}
                    </p>
                    <p>
                        <span className="text-blue-500 rounded-full p-1 text-xl	font-bold"> Temp: </span>{" "}
                        {Math.trunc(temp)}°
                    </p>
                    <p>
                        <span className="text-blue-500 rounded-full p-1 text-xl	font-bold"> Weather: </span>{" "}
                        {weather}
                    </p>
                    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="weather-logo"/>
                </div>
                <div className="card-footer flex flex-col justify-center items-center p-5">
                    <p>
                        <Link to={`/city/${name}`}>
                                <span className="text-blue-500 rounded-full p-1 text-xl font-bold hover:text-blue-300">See more:</span>
                        </Link> 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InformationCity
