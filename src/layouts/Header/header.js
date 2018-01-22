import React from 'react';
import Link from 'gatsby-link'

import logo from "./deviouslyLogo.png";
import './header.css'

const Header = () => {
  return  (
    <div className="header-container">
      <div className="header-title--container">
        <Link to="/" className="header-title--link">
          <img className="header-logo" src={logo} />
          <div className="header-title">
            eviously
          </div>
        </Link>
      </div>
      <div className="header-subtitle">
        opinie pomysły kodowanie
      </div>
    </div>
  )
}

export default Header
