import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/images/logo.png';
import hideLogo from 'assets/images/logo-small.png';

const Logo = () => (
  <Link to="/" className="logo">
    <img src={logo} alt="logo" className="logo-img is-large-logo" />
    <img src={hideLogo} alt="logo" className="logo-img is-small-logo" />
  </Link>
);
export default Logo;
