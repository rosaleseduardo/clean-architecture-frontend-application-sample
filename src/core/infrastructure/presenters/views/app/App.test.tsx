import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders the app header', () => {
    render(<App />);
    const header = screen.getByRole('heading', { name: 'Vite + React' });
    expect(header).toBeInTheDocument();
  });

  it('renders the count', () => {
    render(<App />);
    const count = screen.getByText('count is 0');
    expect(count).toBeInTheDocument();
  });
});
