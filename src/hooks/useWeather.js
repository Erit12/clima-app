import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherByCity, clearWeather } from '../features/weather/weatherSlice';

export const useWeather = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const getWeather = (cityName) => {
    dispatch(fetchWeatherByCity(cityName));
  };

  const resetWeather = () => {
    dispatch(clearWeather());
  };

  return {
    ...weather,
    getWeather,
    resetWeather,
  };
};
