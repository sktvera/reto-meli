const React = require('react');
const { render, screen, fireEvent, queryByText } = require('@testing-library/react');

const BestSeller = require('../app/components/BestSeller');
const items = require('../mocks/items.json');

describe('BestSeller', () => {
  it('render BestSeller component without items', () => {
    render(<BestSeller items={[]} />);
    
    expect(screen.queryByText('Más vendidos')).toBeNull();
  });

  it('render BestSeller component with items', () => {
    render(<BestSeller items={items} />);

    expect(screen.queryByText('Más vendidos')).not.toBeNull();
    
    items.forEach((item) => {
      expect(screen.queryByText(item.title)).not.toBeNull();
      expect(screen.queryAllByText(`${item.currency_id} ${item.price}`)).not.toBeNull();
      expect(screen.queryByAltText(item.title).getAttribute('src')).toBe(item.thumbnail);
    });
  });

  it('showAddress toggles correctly when clicking on show address', () => {
    render(<BestSeller items={[items[0]]} />);
    const showAddressElement = screen.getByText('Mostrar dirección');
    
    const address = `${items[0].address.city_name}, ${items[0].address.state_name}`;

    expect(screen.queryByText(address)).toBeNull();
    
    fireEvent.click(showAddressElement);

    expect(screen.queryByText(address)).not.toBeNull();
    
    fireEvent.click(showAddressElement);
    
    expect(screen.queryByText(address)).toBeNull();
  });
});
