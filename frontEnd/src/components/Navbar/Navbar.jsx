import React, { useContext, useState, useRef } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { cartItems, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const buttonRef = useRef(null);

  const logout = () => {
    setToken(null);
    // Add any additional logout logic here
  };

  // Function to calculate total items in the cart
  const getTotalItemsInCart = () => {
    return Object.values(cartItems).reduce((total, count) => total + count, 0);
  };
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="navbar">
      <Link to="/" onClick={scrollToTop}>
        <h2>Selam Mart</h2>
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>

        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          {/* Display the total items in the cart */}
          {getTotalItemsInCart() > 0 && (
            <div className="dot">{getTotalItemsInCart()}</div>
          )}
        </div>
        {!token ? (
          <button ref={buttonRef} onClick={() => setShowLogin(true)}>
            sign in
          </button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li
                onClick={() => {
                  navigate("/myorders");
                }}
              >
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
