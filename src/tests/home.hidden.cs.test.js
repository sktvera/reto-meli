/**
 * @author Julian David Vera Godoy
 * @description test for the Home component
* @date 2025-06-24
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home/Home.jsx';
import { MemoryRouter } from 'react-router-dom';

//  Mock del contexto de autenticación:
// Simulamos que el usuario ya está logueado para probar la vista protegida "Home"
jest.mock('../Context/AuthContext', () => ({
  useAuth: () => ({
    isLoggedIn: true,
    logout: jest.fn(), // Por ahora no probamos logout, pero lo dejamos definido
  }),
}));

//  Mock del servicio de productos comunes:
// Retornamos un producto simple con los datos mínimos necesarios para ser renderizado
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

//  Mock del servicio de productos destacados:
// Este simula que también hay un producto destacado disponible
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

//  Test principal:
// Verificamos que al renderizar la página de inicio,
// se muestren correctamente tanto los productos comunes como los destacados
test('Home › renderiza correctamente con productos combinados', () => {
  render(
    <MemoryRouter> {/* Simulamos el contexto de rutas */}
      <Home />
    </MemoryRouter>
  );

  //  Comprobamos que ambos productos aparecen en el DOM
  expect(screen.getByText(/producto común/i)).toBeInTheDocument();
  expect(screen.getByText(/producto destacado/i)).toBeInTheDocument();
});