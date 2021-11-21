import React from 'react';
import './App.css';

import { BrowserRouter,Routes, Route} from "react-router-dom"

//Pages
import Home from "./Pages/Home/Home"
import WeatherInformation from './Pages/WatherInformation/WatherInformation';
import MainLayaut from './Layaut/MainLayaut';
import Error from "./Pages/Error/Error"
import WatherMoreInformation from './Pages/WatherMoreInformation/WatherMoreInformation';
function App() {
  return (
    
      <BrowserRouter>
      <MainLayaut>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/city/:name" exact element={<WatherMoreInformation/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </MainLayaut>
      </BrowserRouter>
    

  );
}

export default App;
