import React from 'react';
import { PaginationContainer, PageButton, NextButton } from './styles/PaginationStyles';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages === 0) return null;

  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }, (_, i) => (
        <PageButton
          key={i}
          onClick={() => onPageChange(i + 1)}
          disabled={currentPage === i + 1}
          isActive={currentPage === i + 1}
        >
          {i + 1}
        </PageButton>
      ))}

      {currentPage < totalPages && (
        <NextButton onClick={() => onPageChange(currentPage + 1)}>
          Siguiente &rsaquo;
        </NextButton>
      )}
    </PaginationContainer>
  );
}