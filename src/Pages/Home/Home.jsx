import React, { useState } from "react";

//Components
import WeatherForm from "../../Components/Home/Form/WatherForm";
import Loader from "../../Components/Custom/Loader/Loader"
import InformationCity from "../../Components/Home/InformationCity/InformationCity";
import Error from "../Error/Error"

const Home = () => {
  //State
  const [cityName, setCityName] = useState("");
  const [cityInformation, setCityInformation] = useState(null);
  const [loader, setLoader] = useState(false);
  const [statusCity, setStatusCity] = useState(null);
  const [statusText, setStatusText] = useState(null);

  //Funciones
  const handleCity = ({ value }) => {
    setCityName(value);
  };

  const handleSearchWeather = async e => {
    e.preventDefault();
    setCityInformation(null);
    setLoader(true);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3eee2f7fbbf38f65d3a0a34e21b03428`;
    const response = await fetch(API);
    const result = await response.json();
    console.log(result)
    setStatusCity(result.cod)
    setStatusText(result.message)
    setCityInformation(result);
    setLoader(false);
  };

  return (
    <div className="">
      <WeatherForm
        handleCity={handleCity}
        handleSearchWeather={handleSearchWeather}
      />
      <div className="text-center">
        {cityInformation ? cityInformation.cod !== 200 ? 
        <Error 
        status={statusCity}
        text={statusText} 
      /> : <InformationCity 
      name={cityInformation?.name}
      temp={cityInformation?.main.temp}
      weather={cityInformation.weather[0].description} 
      img={cityInformation.weather[0].icon}
    /> : null}

      </div>

      {loader && <Loader />}

      
    </div>
  );
};
//{cityInformation && <CityInformation name={cityInformation.name} />}
export default Home;
