import React, { useState } from 'react';
import '../index.css';
import MyAppBar from '../../../MyAppBar/MyAppBar';
import API from '../API';
import Search from '../Search';
import Card from '../Card';

const WeatherApp = () => {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState(null);

  return (
    <div className="WeatherApp">
      <MyAppBar />
      <API city={city} setWeather={setWeather} />
      <Search setCity={setCity} />
      <Card weather={weather} />
    </div>
  );
}

export default WeatherApp;
