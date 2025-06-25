/**
 * @author Julian David Vera Godoy
 * @description test for the ProductTable component
* @date 2025-06-24
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductTable from '../Components/private/ProductTable/ProductTable';

//  Datos simulados:
// Creamos dos productos con datos representativos para probar el renderizado en la tabla
const mockData = [
  {
    id: '1',
    title: 'Producto Test 1',
    thumbnail: 'https://via.placeholder.com/150',
    attributes: [{ id: 'BRAND', value_name: 'Color azul' }], // Marca simulada
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
    attributes: [{ id: 'BRAND', value_name: 'Color rojo' }],
    permalink: 'https://example.com/product2',
    price: 78900,
    condition: 'used',
    seller: { nickname: 'Vendedor Test 2' },
    address: { city_name: 'Medellín', state_name: 'Antioquia' },
  },
];

test('ProductTable › renderiza los productos y muestra sus datos', () => {
  const mockSetFilterType = jest.fn(); // Simulamos la función de filtro, aunque no la evaluamos directamente

  //  Renderizamos el componente con los datos de prueba
  render(
    <ProductTable
      data={mockData}
      filterType="all"
      setFilterType={mockSetFilterType}
    />
  );

  //  Validación 1: Títulos de los productos
  // Nos aseguramos de que los nombres de los productos aparezcan correctamente
  expect(screen.getByText(/Producto Test 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Producto Test 2/i)).toBeInTheDocument();

  //  Validación 2: Marca (BRAND) renderizada desde atributos
  // Confirmamos que los atributos de marca se muestren bien
  expect(screen.getByText(/Color azul/i)).toBeInTheDocument();
  expect(screen.getByText(/Color rojo/i)).toBeInTheDocument();

  //  Validación 3: Precio formateado correctamente
  // Como los precios pueden usar coma o punto, usamos un matcher flexible
  expect(screen.getByText((t) => t.includes('123') && t.includes('456'))).toBeInTheDocument();
  expect(screen.getByText((t) => t.includes('78') && t.includes('900'))).toBeInTheDocument();

  //  Validación 4: Condición del producto (nuevo o usado)
  expect(screen.getByText(/Nuevo/i)).toBeInTheDocument();
  expect(screen.getByText(/Usado/i)).toBeInTheDocument();

  //  Validación 5: Verificamos que el botón de paginación esté visible
  expect(screen.getByText('1')).toBeInTheDocument();
});