import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="top">
        <div className="top_left">
          <img src={logo} alt="" />
          <p>
            I'm a visual merchandiser from, india with 9 years of experience in
            companies like Forever champ and H&M.
          </p>
        </div>
        <div className="top_right">
          <div className="email_input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <p className="bottom_left">
          ©️ 2025 Matiur Rehman. All rights reserved.
        </p>
        <div className="bottom_right">
          <p>Term of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
