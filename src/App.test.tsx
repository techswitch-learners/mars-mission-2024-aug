import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import "@testing-library/jest-dom";
import Hamburger from './Hamburgerbutton';

// remove this test when real tests are added
test('renders header', () => {
    render(<App />);
    const header = screen.getAllByText(/MarsioKart/i);
    expect(header[0]).toBeInTheDocument();
  });

test('calls onClick when Hamburger button is clicked', () => {
    const handleClick = jest.fn();
    render(<Hamburger onClick={handleClick} label="Click Me" />);
  
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
  
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

