import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function API(props) {
  const { city, setWeather } = props;
  const navigate = useNavigate();

  useEffect(() => {
    async function weatherAPI() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"0f0d0bf83ad3056be3a67fe288bbd3fd"}`
      );
      const data = await response.json();
      console.log(data);
      const chosenData = {
        name: data.name,
        id_of_weather: data.weather[0].id,
        id_icon: data.weather[0].icon,
        main_forecast: data.weather[0].main,
        description: data.weather[0].description,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        temperature: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        wind: data.wind.speed,
      };
      setWeather(chosenData);
      console.log(chosenData);
    }
    weatherAPI();
  }, [city, setWeather, navigate]);

  return <div className="Weather Info"></div>;
}
