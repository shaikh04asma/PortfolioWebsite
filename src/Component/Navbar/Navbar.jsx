import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo_img" />
      <ul className="nav_menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Porfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav_connect">
        <button class="button">Contact Me</button>
      </div>
    </div>
  );
};

export default Navbar;
