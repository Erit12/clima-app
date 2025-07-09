import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '1bb421246cd8031fc4d1e0e6ae6bf727';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=1bb421246cd8031fc4d1e0e6ae6bf727

export const fetchWeatherByCity = createAsyncThunk(
  'weather/fetchWeatherByCity',
  async (cityName, thunkAPI) => {
    const state = thunkAPI.getState();
    const cache = state.weather.cache;

    // Si ya existe en cache, devolvemos directamente
    if (cache[cityName]) {
      return cache[cityName];
    }

    try {
      const response = await axios.get(`${BASE_URL}`, {
        params: {
          q: cityName,
          units: 'metric',
          appid: API_KEY,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    loading: false,
    error: null,
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    cache: {}, // ← aquí guardaremos resultados por ciudad
  },
  reducers: {
    clearWeather(state) {
      state.data = null;
      state.error = null;
      state.loading = false;
    },
    addFavorite(state, action) {
      const city = action.payload;
      if (!state.favorites.includes(city)) {
        state.favorites.push(city);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    removeFavorite(state, action) {
      const city = action.payload;
      state.favorites = state.favorites.filter((c) => c !== city);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByCity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherByCity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Error desconocido';
      })
      .addCase(fetchWeatherByCity.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      
        // Guardar en cache
        const city = action.payload.name;
        state.cache[city] = action.payload;
      });
  },
});

export const { clearWeather, addFavorite, removeFavorite } = weatherSlice.actions;

export default weatherSlice.reducer;
