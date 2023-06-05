import React from 'react';

const forecastIcons = {
  Clear: './sunny.png',
  Rain: './rain.png',
  Clouds: './cloudy.png'
  // Add more forecast conditions and corresponding icons as needed
};

function getForecastIcon(forecast) {
  const icon = forecastIcons[forecast];
  return icon || null;
}

export default function Card(props) {
  const { weather } = props;

  return (
    <div className="weather-display">
      {weather && (
        <>
          <h1>{weather.name}</h1>
          <h1>{Math.round(weather.temperature) - 273}°C</h1>
          {forecastIcons[weather.main_forecast] && (
            <img className="icons" src={forecastIcons[weather.main_forecast]} alt="Forecast" />
          )}
          <p>{weather.description}</p>
          <h3>Feels like: {Math.round(weather.feels_like) - 273}°C</h3>
          <p>
            Max: {Math.round(weather.temp_max) - 273}°C Min: {Math.round(weather.temp_min) - 273}°C
          </p>
          <p>Wind speed: {Math.round(weather.wind)}m/s</p>
          <p>Humidity: {Math.round(weather.humidity)}%</p>
        </>
      )}
    </div>
  );
}
