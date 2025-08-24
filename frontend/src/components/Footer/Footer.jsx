import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img
            src={assets.logo}
            alt=""
            className="footer-left-logo"
            id="footer-left-logo"
          />
          <p>
            Hungry? We’ve got you covered. Whether you're craving a cheesy
            pizza, spicy noodles, or a healthy salad, our app makes it easy to
            find what you love. Browse nearby restaurants, customize your meal,
            and track your delivery live—all in just a few taps.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/apexujjwal">
              <img src={assets.facebook_icon} alt="" />
            </a>
            <a href="https://x.com/apexujjwal">
              <img src={assets.twitter_icon} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/apexujjwal/">
              <img src={assets.linkedin_icon} alt="" />
            </a>
            <a className="insta" href="https://www.instagram.com/apexujjwal/">
              <img src={assets.insta_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 8865892737</li>
            <li>dinefeastin@gmail.com</li>
            <li>ujjwalpalhdr@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="hr" />
      <p className="footer-copyright">
        Copyright 2025 © Dinefeast.shop - All Right Reserved. | Developed
        by Ujjwal Pal
      </p>
    </div>
  );
};

export default Footer;
