import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting', () => {
  render(<App />);
  const heading = screen.getByText(/good morning/i);
  expect(heading).toBeInTheDocument();
});
