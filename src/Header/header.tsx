import React from 'react';
import Hamburger from './Hamburgerbutton';

const Header: React.FC = () => {
  return (
    <div className="App">
      {/* call to display the hamburger button and menu items */}
      <Hamburger />
    </div>
  );
};

export default Header;