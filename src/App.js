
import './App.css';
import React, { useEffect, useState } from 'react';
import "./keys";
import API_KEY from './keys';
require('dotenv').config();

function App() {
  const [weather, setWeather] = useState(null);
  useEffect(() => { 
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("appid", API_KEY); //insert appid so they take our request
    url.searchParams.append("zipcode", 22904); //hardcoded zipcode
    fetch(url).then(resp=>  {
      return resp.json();
    }).then(obj=> {
      setWeather(obj);
    });
  }, []);
  return (
    <div style = {{ textAlign: 'center'}}>
      {console.log(API_KEY)}
      
      <h1> Weather App </h1>
      {JSON.stringify(weather)}
    </div>
  );
}

export default App;
