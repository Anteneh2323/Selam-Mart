import React from "react";
import "./Header.css";

const Header = () => {
  const handleMenuClick = () => {
    const element = document.getElementById("explore-menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Ethiopian Restaurant</h2>
        <p>
          Selam Mart is dedicated to sharing the authentic flavors of Ethiopia
          with our community. What began as a small venture has blossomed into a
          beloved destination for food enthusiasts.
        </p>
        <button onClick={handleMenuClick}>Menu</button>
      </div>
    </div>
  );
};

export default Header;
