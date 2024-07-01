import React from 'react';

import MenuControl from 'components/common/MenuControl';

import user from 'assets/images/user-avatar.png';

const Header = () => (
  <header className="header">
    <MenuControl />

    <ul className="header-control-list">
      <li className="header-list-items">
        <a href="/" className="header-list-link">
          <span className="header-bar icon-search" aria-hidden="true"></span>
        </a>
      </li>
      <li className="header-list-items">
        <a href="/" className="header-list-link">
          <span className="header-bar icon-chat" aria-hidden="true"></span>
          <span className="counter">3</span>
        </a>
      </li>
      <li className="header-list-items">
        <a href="/" className="header-list-link">
          <span className="header-bar icon-shopping-cart" aria-hidden="true"></span>
          <span className="counter">3</span>
        </a>
      </li>
      <li className="header-list-items">
        <a href="/" className="header-list-link">
          <div className="avatar">
            <img src={user} alt="user-avatar" className="user-avatar" />
          </div>
        </a>
      </li>
    </ul>
  </header>
);

export default Header;
