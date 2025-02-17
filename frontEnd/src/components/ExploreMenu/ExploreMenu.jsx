import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <>
      <div id="explore-menu" className="explore-menu">
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">
          The combination of shared dining, flavorful spices, and the use of
          injera as both a food and utensil make Ethiopian food a memorable and
          distinctive culinary experience.
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div
                className="explore-menu-list-item"
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                key={index}
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_image}
                  alt=""
                />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </>
  );
};

export default ExploreMenu;
