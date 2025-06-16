import React from 'react';
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