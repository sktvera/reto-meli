/**
 * @author Julian David Vera Godoy
 * @description test for the Pagination component
* @date 2025-06-24
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../Components/private/Pagination/Pagination';

describe('Pagination component', () => {
  const mockOnPageChange = jest.fn(); // Simulamos la función de cambio de página

  //  Test 1: No debería renderizar nada si no hay páginas disponibles
  test('no renderiza nada si totalPages es 0', () => {
    const { container } = render(
      <Pagination currentPage={1} totalPages={0} onPageChange={mockOnPageChange} />
    );

    // Esperamos que no haya ningún elemento renderizado en el DOM
    expect(container.firstChild).toBeNull();
  });

  //  Test 2: Renderiza correctamente los botones de paginación y el botón "Siguiente"
  test('renderiza los botones de página y el botón "Siguiente"', () => {
    render(<Pagination currentPage={1} totalPages={3} onPageChange={mockOnPageChange} />);

    // Comprobamos que aparecen los botones para cada página
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();

    // Verificamos que el botón "Siguiente" también esté presente
    expect(screen.getByText(/siguiente/i)).toBeInTheDocument();
  });

  //  Test 3: El botón correspondiente a la página actual debe estar deshabilitado
  test('el botón activo debe estar deshabilitado', () => {
    render(<Pagination currentPage={2} totalPages={3} onPageChange={mockOnPageChange} />);

    const activeButton = screen.getByText('2');
    expect(activeButton).toBeDisabled(); // Verificamos que esté desactivado
  });

  //  Test 4: Al hacer clic en un número de página, debe ejecutarse onPageChange con el número correcto
  test('llama a onPageChange al hacer clic en un botón de página', () => {
    render(<Pagination currentPage={1} totalPages={3} onPageChange={mockOnPageChange} />);

    // Simulamos clic en la página 2
    fireEvent.click(screen.getByText('2'));
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  //  Test 5: Al hacer clic en "Siguiente", debe avanzar una página
  test('llama a onPageChange al hacer clic en el botón "Siguiente"', () => {
    render(<Pagination currentPage={2} totalPages={3} onPageChange={mockOnPageChange} />);

    fireEvent.click(screen.getByText(/siguiente/i));
    expect(mockOnPageChange).toHaveBeenCalledWith(3); // Esperamos que avance a la página 3
  });
});