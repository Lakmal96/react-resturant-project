import React from "react";
import MenuItemsControl from "./MenuItemsControl";
import pizza from "../assets/pizza.jpg";
import burger from "../assets/burger.jpg";
import fries from "../assets/fries.jpg";
import cola from "../assets/cola.jpg";

const MenuItems = (props) => {
  const items = [
    { id: "pizza", name: "Pizza", image: pizza, price: 1200 },
    { id: "burger", name: "Burger", image: burger, price: 900 },
    { id: "fries", name: "French fries", image: fries, price: 450 },
    { id: "cola", name: "Coca-Cola", image: cola, price: 300 },
  ];

  return (
    <div className="menu-items">
      {items.map((item) => {
        return (
          <MenuItemsControl
            key={item.name}
            img={item.image}
            price={item.price}
            name={item.name}
            added={() => props.itemAdded(item.id)}
            removed={() => props.itemRemoved(item.id)}
          />
        );
      })}
    </div>
  );
};

export default MenuItems;
