import React from 'react';
import Hamburger from './Hamburgerbutton';

const Header: React.FC = () => {
  const handleHamburgerClick = () => {
    console.log('Hamburger menu clicked!');
  };

  return (
    <div className="App">
      <Hamburger onClick={handleHamburgerClick} />
    </div>
  );
};

export default Header;