/**
 * @author Julian David Vera Godoy
 * @description Service for managing search keyword suggestions
* @date 2025-06-24
 */
import React from 'react';
import keywords from '../../mocks/search-recommendation.json';

/**
 * Filtra las categorias recomendadas segun el valor del input.
 * @param {string} input Texto ingresado por el usuario.
 * @returns {string[]} Lista filtrada de sugerencias.
 */
export function searchKeywordSuggestions(input = '') {
  if (!input) return keywords;//si no existe despliega todas la categorias
  return keywords.filter(k => k.toLowerCase().includes(input.toLowerCase())// filtra sin conflictos de mayuscula o minuscula y verifica que incluya el valor filtrado
  );
}