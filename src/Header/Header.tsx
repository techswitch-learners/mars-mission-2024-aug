import React from 'react';
import Hamburger from '../Hamburgerbutton/Hamburgerbutton';
import './Header.scss'

const logo = require('../ImageAssets/marsiokartlogo.png')

const Header: React.FC = () => {

  return (
    <div className="header">
      <Hamburger/>
      <img src={logo} alt="Marsio Kart Logo" />
    </div>
  );
};

export default Header;