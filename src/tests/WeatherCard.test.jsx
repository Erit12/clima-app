import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherCard from '../components/WeatherCard';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weather/weatherSlice';

const renderWithState = (preloadedState) => {
  const store = configureStore({
    reducer: { weather: weatherReducer },
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <WeatherCard />
    </Provider>
  );
};

test('muestra mensaje inicial sin datos', () => {
  renderWithState({ weather: { data: null, loading: false, error: null, favorites: [], cache: {} } });
  expect(screen.getByText(/ingresa una ciudad/i)).toBeInTheDocument();
});

test('muestra loader cuando está cargando', () => {
  renderWithState({ weather: { data: null, loading: true, error: null, favorites: [], cache: {} } });
  expect(screen.getByText('Loading ...')).toHaveClass('animate-spin '); // loader animado
});

test('muestra error si falla la API', () => {
  renderWithState({ weather: { data: null, loading: false, error: 'Ciudad no encontrada', favorites: [], cache: {} } });
  expect(screen.getByText('Error: Ciudad no encontrada')).toBeInTheDocument();
});

test('muestra datos si están disponibles', () => {
  renderWithState({
    weather: {
      data: {
        name: 'Lima',
        main: { temp: 25, humidity: 70 },
        weather: [{ description: 'soleado', icon: '01d' }],
        wind: { speed: 2 },
      },
      loading: false,
      error: null,
      favorites: [],
      cache: {},
    },
  });

  expect(screen.getByText(/lima/i)).toBeInTheDocument();
  expect(screen.getByText(/25°C/i)).toBeInTheDocument();
  expect(screen.getByRole('img')).toBeInTheDocument();
});
