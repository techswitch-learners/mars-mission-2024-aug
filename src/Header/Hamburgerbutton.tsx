import React, { useState } from 'react';
import './Hamburgerbutton.scss'; // styling for the hmauburger button icon
import Menu from './Menu'
import { menuItems } from './MenuItems';

interface HamburgerProps {
  // onClick: () => void;
    // label: string;

}

const Hamburger: React.FC<HamburgerProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // menu items display/not display on click
    setIsOpen(!isOpen);
    console.log('Hamburger menu display options!');
    <Menu items={menuItems}  />
  };

  return (
    <div>
    <button onClick={handleClick} className="hamburger" data-testid="toggle-button">
         {/* draw the 3 lines which make up the hmburger  */}
        <div className="line" />
        <div className="line" />
        <div className="line" />
    </button>
{/* display the menu list of clicked/unclicked */}
    {isOpen && (
        <div className="menu" data-testid="menu">
          <Menu items={menuItems} />
      </div>
  )}
  </div>
  );
};

export default Hamburger;