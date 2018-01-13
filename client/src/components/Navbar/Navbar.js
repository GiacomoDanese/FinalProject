import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (
  <div className="container-fluid">
      <nav className="navbar fixed-top navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="#"> Music TYE </a>
        <div className="navbar" id="navbarSupportedContent">
              <a className="nav-link">
              <Link to="/">Home</Link> 
              <span className="sr-only">(current)</span></a>
              <a className="nav-link">
              <Link to="/feed">Feed</Link>
              </a>
              <a className="nav-link">
              <Link to="/learn">Learn</Link>
              </a>
        </div>
        </div>
      </nav>
      </div>
    );

export default Navbar;
