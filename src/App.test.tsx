import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const delta = screen.getByText(/delta/i);
  const weather = screen.getByText(/weather/i);

  expect(delta).toBeInTheDocument();
  expect(weather).toBeInTheDocument();
});
