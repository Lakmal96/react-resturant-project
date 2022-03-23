import React from "react";

const MenuItemsControl = (props) => {
  return (
    <div>
      <div>
        <img src={props.img} alt={props.name} />
      </div>
      <div>{props.name}</div>
      <div>{props.price}</div>
      <button>Add</button>
      <button>Remove</button>
    </div>
  );
};

export default MenuItemsControl;
