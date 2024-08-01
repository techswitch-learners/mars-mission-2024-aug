import React from 'react';
import Hamburger from '../Hamburgerbutton/Hamburgerbutton';

const logo = require('../ImageAssets/marsiokartlogo.jpg')

const Header: React.FC = () => {
  return (
    <div className="App">
      <Hamburger />
      <img src={logo} alt="Marsio Kart Logo" />
    </div>
  );
};

export default Header;