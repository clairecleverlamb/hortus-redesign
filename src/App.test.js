import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Why choose Hortus section', () => {
  render(<App />);
  const sectionElement = screen.getByText(/Why choose Hortus/i);
  expect(sectionElement).toBeInTheDocument();
});
