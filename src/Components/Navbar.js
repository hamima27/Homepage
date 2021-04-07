import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            THE FLAT FINDER!
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}></ul>
        </div>
      </nav>
      <button className="ham">
        <span className="menuIcon material-icons">Profile</span>
      </button>
      <ul class="menu">
        <li>
          <a className="menuLink" href="Navbar.css">
            Home
          </a>
        </li>
        <li>
          <a className="menuLink" href="Navbar.css">
            About Us!
          </a>
        </li>
        <li>
          <a className="menuLink" href="Navbar.css">
            Contacts
          </a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
