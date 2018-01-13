import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
 <div className="navigator">  
  <div className="container-fluid">
      <nav className="navbar fixed-top navbar-light" style={{backgroundColor: '#e6f6fd'}}>
        <div className="container-fluid">
        <a className="navbar-brand"><strong> Music TYE </strong></a>
        <div className="navbar" id="navbarSupportedContent">
              <a className="nav-link text-dark" >
              <Link to="/">Home</Link> 
              <span className="sr-only">(current)</span></a>
              <a className="nav-link text-dark">
              <Link to="/feed ">Feed</Link>
              </a>
              <a className="nav-link text-dark">
              <Link to="/learn">Learn</Link>
              </a>
              <a href="https://music2ears.auth0.com/login?client=Jo4UPG0tr9tLoNI1dWOobC1qNN_C92aP" className="text-dark">Sign Up</a>
        </div>
        </div>
      </nav>
      </div>
    </div>
    );

export default Navbar;
// e6f6fd

// navbar navbar-light" style="background-color: #e3f2fd;"