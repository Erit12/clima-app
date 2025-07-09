import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/weather/weatherSlice';

export const useFavorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.weather.favorites);

  const isFavorite = (city) => favorites.includes(city);

  const toggleFavorite = (city) => {
    isFavorite(city) ? dispatch(removeFavorite(city)) : dispatch(addFavorite(city));
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  };
};
