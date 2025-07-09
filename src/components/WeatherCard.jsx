import React from 'react';
import Loader from './Loader';
import { useWeather } from '../hooks/useWeather';
import { useFavorites } from '../hooks/useFavorites';

const WeatherCard = () => {
  const { data, loading, error } = useWeather();
  const { isFavorite, toggleFavorite } = useFavorites();

  if (loading) return <Loader />;
  if (error) return <p className="text-red-600 text-center">Error: {error}</p>;
  if (!data)
    return (
      <p className="text-center text-gray-600">
        Ingresa una ciudad para consultar el clima.
      </p>
    );

  const {
    name,
    main: { temp, humidity },
    weather,
    wind: { speed },
  } = data;

  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="bg-white shadow-md rounded p-4 mt-4 text-center">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <img src={iconUrl} alt={weather[0].description} className="mx-auto mb-2" />
      <p className="text-gray-700">
        🌡️ Temp: {temp}°C <br />
        💧 Humedad: {humidity}% <br />
        💨 Viento: {speed} m/s <br />
        ☁️ Estado: {weather[0].description}
      </p>
      <button
        onClick={() => toggleFavorite(name)}
        className={`mt-4 px-4 py-2 rounded ${
          isFavorite(name) ? 'bg-red-500 text-black' : 'bg-green-600 text-black'
        }`}
      >
        {isFavorite(name) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
      </button>
    </div>
  );
};

export default WeatherCard;
