import { render, screen, fireEvent  } from '@testing-library/react';
import "@testing-library/jest-dom";
import Hamburger from './Hamburgerbutton';

test('should toggle hamburger menu on button click', () => {
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
  
  
  
  