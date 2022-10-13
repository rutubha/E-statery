import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="nav-left">
          <div className="logo">Estatery</div>
          <nav className="nav-link">
            <ul>
              <li>Rent</li>
              <li>But</li>
              <li>Sell</li>
              <li>Manage Property</li>
              <li>Resources</li>
            </ul>
          </nav>
        </div>
        <div className="profile">
            <a href="" className="btn outline">Login</a>
            <a href="" className="btn fill margin-left">Signup</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
