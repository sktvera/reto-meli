import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductTable from '../Components/private/ProductTable/ProductTable';

const mockData = [
  {
    id: '1',
    title: 'Producto Test 1',
    thumbnail: 'https://via.placeholder.com/150',
    attributes: [{ value_name: 'Color azul' }],
    permalink: 'https://example.com/product1',
    price: 123456,
    condition: 'new',
    seller: { nickname: 'Vendedor Test 1' },
    address: { city_name: 'Bogotá', state_name: 'Cundinamarca' },
  },
  {
    id: '2',
    title: 'Producto Test 2',
    thumbnail: 'https://via.placeholder.com/150',
    attributes: [{ value_name: 'Color rojo' }],
    permalink: 'https://example.com/product2',
    price: 78900,
    condition: 'used',
    seller: { nickname: 'Vendedor Test 2' },
    address: { city_name: 'Medellín', state_name: 'Antioquia' },
  },
];

test('ProductTable › renderiza los productos y muestra sus datos', () => {
  const mockSetFilterType = jest.fn();

  render(
    <ProductTable
      data={mockData}
      filterType="all"
      setFilterType={mockSetFilterType}
    />
  );

  // Verifica que los títulos se rendericen
  expect(screen.getByText(/Producto Test 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Producto Test 2/i)).toBeInTheDocument();

  // Verifica atributos visuales
  expect(screen.getByText(/Color azul/i)).toBeInTheDocument();
  expect(screen.getByText(/Color rojo/i)).toBeInTheDocument();

  // Verifica precios formateados
  expect(screen.getByText(/\$123,456/)).toBeInTheDocument();
  expect(screen.getByText(/\$78,900/)).toBeInTheDocument();

  // Verifica condiciones
  expect(screen.getByText(/Nuevo/i)).toBeInTheDocument();
  expect(screen.getByText(/Usado/i)).toBeInTheDocument();

  // Verifica paginación
  expect(screen.getByText('1')).toBeInTheDocument(); // página actual
});