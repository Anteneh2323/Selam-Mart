import React, { useContext, useEffect, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import menu from "../../assets/data";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext); // Fetch food_list from context
  const [displayList, setDisplayList] = useState(menu); // Default to static menu data

  useEffect(() => {
    // Update displayList when food_list changes
    if (food_list.length > 0) {
      setDisplayList(food_list); // Use server data if available
    }
  }, [food_list]);

  return (
    <div className="food-display" id="food-display">
      <h2>Our Menu</h2>
      <div className="food-display-list">
        {displayList.map((item) => {
          // Render item if category is "All" or matches item category
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item.id || item._id} // Handle both static and server keys
                id={item.id || item._id}
                name={item.title || item.name}
                description={item.desc || item.description}
                price={item.price}
                image={item.img || item.image}
              />
            );
          }
          return null; // Skip items that don't match the category
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
