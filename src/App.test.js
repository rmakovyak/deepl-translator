import { render, screen } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
  const linkElement = screen.getByText(/Babbel Deepl test/i);
  expect(linkElement).toBeInTheDocument();
});
