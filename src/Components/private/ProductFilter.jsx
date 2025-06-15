import React from 'react';

export default function ProductFilter({ filterType, setFilterType }) {
  return (
    <div style={styles.filterWrapper}>
      <label style={styles.filterLabel}>Ordenar por</label>
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        style={styles.filterSelect}
      >
        <option value="all">Todos</option>
        <option value="common">Solo comunes</option>
        <option value="featured">Solo destacados</option>
      </select>
    </div>
  );
}

const styles = {
  filterWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: '16px',
    gap: '10px',
  },
  filterLabel: {
    fontSize: '14px',
    color: '#666',
  },
  filterSelect: {
    padding: '6px 12px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='gray' height='12' viewBox='0 0 24 24' width='12' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    backgroundSize: '12px',
  },
};