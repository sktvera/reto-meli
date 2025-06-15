// src/services/productService.js
import data from '../mocks/results.json';

export function getProducts(query = '') {
  if (!query) return data.results;
  return data.results.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
}

export function getAvailableFilters() {
  return data.available_filters || [];
}

export function getPagingInfo() {
  return data.paging;
}

export function getSortOptions() {
  return data.available_sorts || [];
}

export function extractAttributes(product) {
  if (!product || !product.attributes) return {};
  return product.attributes.reduce((acc, attr) => {
    acc[attr.id] = attr.value_name;
    return acc;
  }, {});
}

// ✅ Esta es la función que te falta exportar:
export function getPaging() {
  return data.paging;
}