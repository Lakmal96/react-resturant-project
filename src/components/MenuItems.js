import React from "react";
import MenuItemsControl from "./MenuItemsControl";
import image from "../assets/image.jpg";

const MenuItems = (prpos) => {
  const items = [
    { name: "Pizza", image: image, price: 1200 },
    { name: "Burger", image: image, price: 900 },
    { name: "French fries", image: image, price: 450 },
    { name: "Coca-Cola", image: image, price: 300 },
  ];

  return (
    <div>
      <div>
        {items.map((item) => {
          return (
            <MenuItemsControl
              key={item.name}
              img={item.image}
              price={item.price}
              name={item.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuItems;
