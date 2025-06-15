import keywords from '../../mocks/search-recommendation.json';

/**
 * Filtra las recomendaciones de búsqueda desde un archivo JSON.
 * @param {string} input Texto ingresado por el usuario.
 * @returns {string[]} Lista filtrada de sugerencias.
 */
export function searchKeywordSuggestions(input = '') {
  if (!input) return keywords;
  return keywords.filter(k =>
    k.toLowerCase().includes(input.toLowerCase())
  );
}