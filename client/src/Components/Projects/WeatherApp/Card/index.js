import React from 'react';

export default function Card(props) {
  const { weather } = props;

  // Define the styles for the icons
  const iconStyles = {
    fontSize: '150px',
    color: weather && weather.main_forecast === 'Clear' ? 'yellow' : weather && weather.main_forecast === 'Clouds' ? 'grey' : weather && weather.main_forecast === 'Rain' ? 'blue' : 'inherit',
  };

  return (
    <div className="weather-display">
      {weather && (
        <>
          <h1>{weather.name}</h1>
          <h1>{Math.round(weather.temperature) - 273}°C</h1>
          {weather.main_forecast && ( // Added null check here
            <i className="material-icons" style={iconStyles}>
              {getIconName(weather.main_forecast)}
            </i>
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

function getIconName(forecast) {
  // Map the forecast value to the corresponding icon name
  switch (forecast) {
    case 'Clear':
      return 'wb_sunny';
    case 'Rain':
      return 'umbrella';
    case 'Clouds':
      return 'cloud';
    default:
      return '';
  }
}
