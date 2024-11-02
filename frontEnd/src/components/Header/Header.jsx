import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-contents">
          <h2> Ethiopian Restaurant</h2>
          <p>
            Ethiopian cuisine is unique not only for its distinct flavors and
            ingredients but also for the cultural significance it holds in the
            country. 
          </p>
          <button> Menu</button>
        </div>
      </div>
    </>
  );
};

export default Header;
