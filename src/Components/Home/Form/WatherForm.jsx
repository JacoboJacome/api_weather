import React from "react";

const WeatherForm = ({ handleCity, handleSearchWeather }) => {
  return (
    <form 
    action=""
    onSubmit={e => handleSearchWeather(e)}
    className="w-5/6 tablet:w-1/2  m-auto mt-10 justify-center items-center  flex flex-col">
      <input
        type="text"
        placeholder="City Name"
        onChange={({ target }) => handleCity(target)}
        className="p-2 rounded-full my-4 w-2/3 tablet:w-3/4 search-input ring-2 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
      />
      <input 
      type="submit"
      value="Search !"
      className="p-2 my-4 rounded-full w-1/3 tablet:w-1/4 bg-blue-400 hover:bg-blue-800 text-white search-input_button" />
    </form>
  );
};

export default WeatherForm;