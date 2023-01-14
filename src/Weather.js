import React, { useState, useEffect } from 'react';
import {
  FaSun,
  FaCloud,
  FaCloudRain,
  FaQuestion,
  FaSnowflake,
} from 'react-icons/fa'



const Weather = () => {
  const [weather, setWeather] = useState(null);

  const weatherIcons = {
    'clear sky': <FaSun/>,
    'few clouds': FaSun,
    'overcast clouds': <FaCloud/>,
    'scattered clouds': FaCloud,
    'broken clouds': FaCloud,
    'shower rain': FaCloudRain,
    'rain': FaCloudRain,
    'thunderstorm': FaCloudRain,
    'light snow': FaSnowflake,
  };

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?lat=68.4300824&lon=18.125392000000033&units=metric&appid='+process.env.REACT_APP_WEATHER_KEY
      );
      const data = await response.json();
      console.log(process.env)
      setWeather(data);
    };

    fetchWeather();
  }, []);

  if (!weather) {
    return <div>Loading weather...</div>;
  }

  const currentWeather = weather.weather[0].description;
  const icon = weatherIcons[currentWeather] || FaQuestion;

  return (
    <div>
      <h2>{icon} Weather in Riksgränsen, Sweden {icon}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Description: {weather.weather[0].description}</p>
      <p>Visibility: {weather.visibility / 1000} km</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;