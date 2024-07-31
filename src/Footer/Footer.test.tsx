import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import "@testing-library/jest-dom";

test('renders footer', () => {
    render(<Footer/>);
    const footer = screen.getByText(/NASA/i);
    expect(footer).toBeInTheDocument();
  });