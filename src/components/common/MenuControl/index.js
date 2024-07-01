import React from 'react';

const MenuControl = () => {
  const toggleMenu = () => {
    const isOpen = document.getElementById('app').classList.length > 1
      ? document.getElementById('app').classList.remove('is-closed-menu')
      : document.getElementById('app').classList.add('is-closed-menu');
    return isOpen;
  };

  return (
    <button type="button" className="nav-toggle icon-menu" aria-hidden="true" onClick={toggleMenu}></button>
  );
};

export default MenuControl;
