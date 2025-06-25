/**
 * @author Julian David Vera Godoy
 * @description Product filter component for sorting products
* @date 2025-06-24
 */

import React from 'react';
//ASSETS________
import {
  FilterWrapper,
  FilterLabel,
  FilterSelect
} from './styles/ProductFilterStyles';

export default function ProductFilter({ filterType, setFilterType }) {
  return (
    <FilterWrapper>
      <FilterLabel>Ordenar por</FilterLabel>
      <FilterSelect
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="all">Todos</option>
        <option value="common">Solo comunes</option>
        <option value="featured">Solo destacados</option>
      </FilterSelect>
    </FilterWrapper>
  );
}