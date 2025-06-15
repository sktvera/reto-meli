import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages === 0) return null;

  return (
    <div style={styles.pagination}>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          disabled={currentPage === i + 1}
          style={{
            ...styles.pageButton,
            ...(currentPage === i + 1 ? styles.activePage : {}),
          }}
        >
          {i + 1}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          style={styles.nextButton}
        >
          Siguiente &rsaquo;
        </button>
      )}
    </div>
  );
}

const styles = {
  pagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '24px',
    flexWrap: 'wrap',
    gap: '4px',
  },
  pageButton: {
    padding: '8px 12px',
    fontSize: '14px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    color: '#333',
    transition: 'background-color 0.2s, border 0.2s',
  },
  activePage: {
    border: '2px solid #3483fa',
    color: '#3483fa',
    fontWeight: 'bold',
    borderRadius: '6px',
  },
  nextButton: {
    padding: '8px 12px',
    fontSize: '14px',
    color: '#333',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
};