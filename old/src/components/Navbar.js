import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <Link
          className="navbar-item"
          activeClassName="navbar-item--active"
          to="/"
        >
          Home
        </Link>
        <Link
          className="navbar-item"
          activeClassName="navbar-item--active"
          to="/bio"
        >
          Bio
        </Link>
        <Link
          className="navbar-item"
          activeClassName="navbar-item--active"
          to="/cv"
        >
          CV
        </Link>
      </nav>
    );
  }
};

export default Navbar;
