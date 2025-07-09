import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherByCity } from '../features/weather/weatherSlice';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === '') return;
    dispatch(fetchWeatherByCity(city));
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Escribe una ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
