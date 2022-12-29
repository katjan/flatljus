import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const API_KEY = '4fc3f1c19d9ed35e6c39495149438c5b'

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?lat=68.4300824&lon=18.125392000000033&units=metric&appid=4fc3f1c19d9ed35e6c39495149438c5b'
      );
      const data = await response.json();
      setWeather(data);
    };

    fetchWeather();
  }, []);

  if (!weather) {
    return <div>Loading weather...</div>;
  }

  return (
    <div>
      <h2>Weather in Riksgränsen, Sweden</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Description: {weather.weather[0].description}</p>
      <p>Visibility: {weather.visibility / 1000} km</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;