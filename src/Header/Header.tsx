import React from 'react';
import Hamburger from '../Hamburgerbutton/Hamburgerbutton';
import './Header.scss'

const logo = require('../ImageAssets/marsiokartlogo.jpg')

const Header: React.FC = () => {
  const handleHamburgerClick = () => {
    console.log('Hamburger menu clicked!');
  };

  return (
    <div className="header">
      <Hamburger onClick={handleHamburgerClick} label={""}/>
      <img src={logo} alt="Marsio Kart Logo" />
    </div>
  );
};

export default Header;