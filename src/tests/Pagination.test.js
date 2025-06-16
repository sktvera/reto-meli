import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../Components/private/Pagination';

describe('Pagination component', () => {
  const setup = (currentPage = 1, totalPages = 3, onPageChange = jest.fn()) => {
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    );
    return { onPageChange };
  };

  test('renderiza los botones de página correctamente', () => {
    setup();

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('Siguiente ›')).toBeInTheDocument();
  });

  test('el botón de la página actual está deshabilitado', () => {
    setup(2);

    const activeButton = screen.getByText('2');
    expect(activeButton).toBeDisabled();
  });

  test('se llama a onPageChange al hacer clic en otra página', () => {
    const { onPageChange } = setup();

    fireEvent.click(screen.getByText('2'));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  test('se llama a onPageChange al hacer clic en "Siguiente"', () => {
    const { onPageChange } = setup(1, 3);

    fireEvent.click(screen.getByText('Siguiente ›'));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  test('no muestra nada si totalPages es 0', () => {
    render(<Pagination currentPage={1} totalPages={0} onPageChange={() => {}} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});