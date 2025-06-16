import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../Components/private/Pagination/Pagination';

describe('Pagination component', () => {
  const mockOnPageChange = jest.fn();

  test('no renderiza nada si totalPages es 0', () => {
    const { container } = render(
      <Pagination currentPage={1} totalPages={0} onPageChange={mockOnPageChange} />
    );
    expect(container.firstChild).toBeNull();
  });

  test('renderiza los botones de página y el botón "Siguiente"', () => {
    render(<Pagination currentPage={1} totalPages={3} onPageChange={mockOnPageChange} />);

    // Verifica que se rendericen los botones de página
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();

    // Verifica que el botón "Siguiente" esté visible
    expect(screen.getByText(/siguiente/i)).toBeInTheDocument();
  });

  test('el botón activo debe estar deshabilitado', () => {
    render(<Pagination currentPage={2} totalPages={3} onPageChange={mockOnPageChange} />);

    const activeButton = screen.getByText('2');
    expect(activeButton).toBeDisabled();
  });

  test('llama a onPageChange al hacer clic en un botón de página', () => {
    render(<Pagination currentPage={1} totalPages={3} onPageChange={mockOnPageChange} />);

    fireEvent.click(screen.getByText('2'));
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  test('llama a onPageChange al hacer clic en el botón "Siguiente"', () => {
    render(<Pagination currentPage={2} totalPages={3} onPageChange={mockOnPageChange} />);

    fireEvent.click(screen.getByText(/siguiente/i));
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });
});