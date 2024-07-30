import React from 'react';
import './Hamburgerbutton.scss'; // styling for the hmauburger button icon

interface HamburgerProps {
  onClick: () => void;
  label: string;

}

const Hamburger: React.FC<HamburgerProps> = ({ onClick , label}) => {

  const handleClick = () => {
    onClick();
  };

  return (
    <button onClick={handleClick} className="hamburger">
         {/* draw the 3 lines which make up the hmburger  */}
         {label}
        <div className="line" />
        <div className="line" />
        <div className="line" />
    </button>
  );
};

export default Hamburger;