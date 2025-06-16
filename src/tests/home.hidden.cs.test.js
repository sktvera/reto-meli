import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home/Home';
import { MemoryRouter } from 'react-router-dom';

// ✅ Simular contexto de autenticación
jest.mock('../Context/AuthContext', () => ({
  useAuth: () => ({
    isLoggedIn: true,
    logout: jest.fn(),
  }),
}));

// ✅ Simular servicios de productos
jest.mock('../services/productService', () => ({
  getProducts: () => [
    {
      id: '1',
      title: 'Producto común',
      thumbnail: 'img.jpg',
      category_id: 'cat1',
      attributes: [{ value_name: 'Color rojo' }],
      permalink: 'https://ejemplo.com',
      price: 100000,
      condition: 'new',
      seller: { nickname: 'Vendedor A' },
      address: { state_name: 'Bogotá', city_name: 'Chapinero' },
    },
  ],
}));

jest.mock('../services/featuredProductsService', () => ({
  getFeaturedProducts: () => [
    {
      id: '2',
      title: 'Producto destacado',
      thumbnail: 'img2.jpg',
      category_id: 'cat2',
      attributes: [{ value_name: 'Color azul' }],
      permalink: 'https://ejemplo.com/2',
      price: 200000,
      condition: 'used',
      seller: { nickname: 'Vendedor B' },
      address: { state_name: 'Medellín', city_name: 'Laureles' },
    },
  ],
}));

// ✅ Test principal
test('Home › renderiza correctamente con productos combinados', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText(/producto común/i)).toBeInTheDocument();
  expect(screen.getByText(/producto destacado/i)).toBeInTheDocument();
});