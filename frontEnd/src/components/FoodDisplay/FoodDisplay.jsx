import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Our Menu</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          // Render item if category is "All" or matches item category
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id} // Use item._id for a more stable key
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null; // Return null if item doesn't match category
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;