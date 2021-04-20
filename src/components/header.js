import * as React from "react"
import Link from 'gatsby-link';
import Logo from '../assets/logo-designcode.svg';

import './header.css';

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src={Logo} width="30" />
      </Link>
      <Link to="/courses">
        Courses
      </Link>
      <Link to="/downloads">
        Downloads
      </Link>
      <Link to="workshops">
        Workshops
      </Link>
      <Link to="/buy">
        <button>Buy</button>
      </Link>
    </div>
  </div>
)

export default Header
