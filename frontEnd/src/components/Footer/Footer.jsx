import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <>
      <div id="footer" className="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <h2>Selam Mart</h2>
            <p>
              Ethiopian cuisine is unique not only for its distinct flavors and
              ingredients but also for the cultural significance it holds in the
              country.
            </p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+1(512)767-9531</li>
              <li>selam-mart@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2024 - All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
