import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherByCity } from '../features/weather/weatherSlice';

const FavoritesList = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.weather);

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-4">🌟 Ciudades Favoritas</h3>
      <div className="grid gap-4">
        {favorites.map((city) => (
          <FavoriteCityCard key={city} city={city} />
        ))}
      </div>
    </div>
  );
};

const FavoriteCityCard = ({ city }) => {
  const [weather, setWeather] = React.useState(null);
  const [error, setError] = React.useState(null);

  const API_KEY = '1bb421246cd8031fc4d1e0e6ae6bf727';
  useEffect(() => {
    const getWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      }
    };
    getWeather();
  }, [city]);

  if (error) return <p>Error: {error}</p>;
  if (!weather) return <p>Cargando {city}...</p>;

  return (
    <div className="border p-3 rounded shadow">
      <h4 className="font-bold">{weather.name}</h4>
      <p>🌡️ {weather.main.temp}°C - {weather.weather[0].description}</p>
    </div>
  );
};

export default FavoritesList;
