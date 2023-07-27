import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "#313628" : "",
      textDecoration: isActive ? "underline" : "",
      fontWeight: isActive ? "bold" : "",
    };
  };
  return (
    <header>
      <nav role="navigation">
        <div className={classes.menuToggle}>
          <input  className={classes.mobileMenu}type="checkbox" />
          <span className={classes.mobileMenu}></span>
          <span className={classes.mobileMenu}></span>
          <span className={classes.mobileMenu}></span>
          <ul className={classes.navContainer}>
            <li>
              <NavLink style={activeStyle} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink style={activeStyle} to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink style={activeStyle} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink style={activeStyle} to="/skills">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink style={activeStyle} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
