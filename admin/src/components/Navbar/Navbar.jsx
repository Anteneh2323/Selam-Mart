import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <NavLink to="/" className="navbar-home-button">
          <h2>Selam Mart</h2>
        </NavLink>
        <img className="profile" src={assets.profile_image} alt="Profile" />
      </div>
    </>
  );
};

export default Navbar;
