/**
 * @author Julian David Vera Godoy
 * @description Service for managing featured products
* @date 2025-06-24
 */
import React from 'react';
import data from '../mocks/items.json';
// Devuelve todos los productos o filtra por query
export function getFeaturedProducts(query = '') {
  if (!query) return data;

  return data.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );
}

// Simula paginación
export function getFeaturedPaginated(query = '', page = 1, itemsPerPage = 10) {
  const all = getFeaturedProducts(query);
  const start = (page - 1) * itemsPerPage;
  const paginated = all.slice(start, start + itemsPerPage);

  return {
    results: paginated,
    total: all.length,
    totalPages: Math.ceil(all.length / itemsPerPage),
    currentPage: page
  };
}