import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import "@testing-library/jest-dom";
import Hamburger from './Header/Hamburgerbutton';
import Menu from './Header/Menu';

// remove this test when real tests are added
test('renders header', () => {
    render(<App />);
    const header = screen.getAllByText(/MarsioKart/i);
    expect(header[0]).toBeInTheDocument();
  });

// test('calls onClick when Hamburger button is clicked', () => {
//     const handleClick = jest.fn();
//     render(<Hamburger label="Click Me" />);
//     const button = screen.getByText('Click Me');
//     fireEvent.click(button);
//     expect(handleClick).towHaveBeenCalledTimes(1);;
//   });

//   test('test for hamburger menu options ', () => {
//     const handleClick = jest.fn();
//     render(<Hamburger label="Click Me" />);
//     const button = screen.getByText('Click Me');
//     fireEvent.click(button);
//     const menuitem = screen.getByText('Your Acheivements');
//     expect(menuitem).toBeInTheDocument();
//   });

test('should toggle menu on button click', () => {
  render(<Hamburger />);

  const button = screen.getByTestId('toggle-button');
  const menu = screen.queryByTestId('data-testid');

  // Initially, the menu should not be visible
  expect(menu).not.toBeInTheDocument();

  // Click the button to open the menu
  fireEvent.click(button);
  expect(screen.getByTestId('menu')).toBeInTheDocument();

  // Click the button again to close the menu
  fireEvent.click(button);
  expect(screen.queryByTestId('menu')).not.toBeInTheDocument();
});



