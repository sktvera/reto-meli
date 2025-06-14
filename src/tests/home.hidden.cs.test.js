const React = require('react');
const { render } = require('@testing-library/react');
const Home = require('../app/pages/home/view');


describe('Home', () => {
  it('home page', () => {
    const { container } = render(<Home items={[]} />);
  });
});
