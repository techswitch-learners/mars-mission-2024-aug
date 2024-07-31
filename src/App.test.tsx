import { render, screen  } from '@testing-library/react';
import App from './App';
import "@testing-library/jest-dom";

// remove this test when real tests are added
test('renders header', () => {
    render(<App />);
    const header = screen.getAllByText(/MarsioKart/i);
    expect(header[0]).toBeInTheDocument();
  });

