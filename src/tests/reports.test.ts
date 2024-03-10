import { render, screen } from '@testing-library/react';
import Reports from '../components/Reports';

test('renders Reports component', () => {
  render(<Reports />);
  
  const headingElement = screen.getByRole('heading', { name: /Reports/i });
  const paragraphElement = screen.getByText(/View and manage reports/i);
  
  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});