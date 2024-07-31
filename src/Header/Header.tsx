import React from 'react';
import Hamburger from '../Hamburgerbutton/Hamburgerbutton';

const Header: React.FC = () => {
  const handleHamburgerClick = () => {
    console.log('Hamburger menu clicked!');
  };

  return (
    <div className="App">
      <Hamburger onClick={handleHamburgerClick} label={""}/>
      <img src={require('../ImageAssets/marsiokartlogo.jpg')} alt="Marsio Kart Logo" />
    </div>
  );
};

export default Header;