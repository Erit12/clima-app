import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import { Provider } from 'react-redux';
import { store } from '../app/store';

test('renderiza input y botón correctamente', () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );

  expect(screen.getByPlaceholderText(/escribe una ciudad/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /buscar/i })).toBeInTheDocument();
});

test('permite escribir en el input y enviar', () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );

  const input = screen.getByPlaceholderText(/escribe una ciudad/i);
  fireEvent.change(input, { target: { value: 'México' } });
  expect(input.value).toBe('México');

  const button = screen.getByRole('button', { name: /buscar/i });
  fireEvent.click(button);

  // El input se limpia después del envío
  expect(input.value).toBe('');
});
