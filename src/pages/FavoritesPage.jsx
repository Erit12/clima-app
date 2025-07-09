import React from 'react';
import FavoritesList from '../components/FavoritesList';

const FavoritesPage = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">⭐ Favoritos</h1>
      <FavoritesList />
    </div>
  );
};

export default FavoritesPage;
