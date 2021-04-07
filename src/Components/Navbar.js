import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./Button.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            The Flat Finder
          </Link>
          {/* <button classname="hamburger" id="hamburger">
            <i classname="fas fa-times"></i>
          </button> 
          {/* <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div> */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" classname="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/" classname="nav-links" onClick={closeMobileMenu}>
                Settings
              </Link>
            </li>
            <li li className="nav-items">
              <Link to="/" classname="nav-links" onClick={closeMobileMenu}>
                About us!
              </Link>
            </li>
            <li li className="nav-items">
              <Link
                to="/Profile"
                classname="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
          </ul>
          {button && <button buttonStyle="btn--outline">Profile</button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
