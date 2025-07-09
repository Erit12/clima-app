import React from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';

const HomePage = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">🌤️ Clima App</h1>
      <SearchBar />
      <WeatherCard />
    </div>
  );
};

export default HomePage;
