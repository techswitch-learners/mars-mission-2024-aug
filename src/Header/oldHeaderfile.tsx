import React from 'react';
import Hamburger from '../Hamburgerbutton/Hamburgerbutton';

const logo = require('../ImageAssets/marsiokartlogo.jpg')

const Header: React.FC = () => {
  const handleHamburgerClick = () => {
    console.log('Hamburger menu clicked!');
  };

  return (
    <div className="App">
      <Hamburger onClick={handleHamburgerClick} label={""}/>
      <img src={logo} alt="Marsio Kart Logo" />
    </div>
  );
};

export default Header;
