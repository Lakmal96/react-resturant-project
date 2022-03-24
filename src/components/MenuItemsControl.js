import React from "react";

const MenuItemsControl = (props) => {
  return (
    <div className="card">
      <div>
        <img src={props.img} alt={props.name} />
      </div>
      <div>{props.name}</div>
      <div>{props.price}</div>
      <button onClick={props.added}>Add</button>
      <button onClick={props.removed}>Remove</button>
    </div>
  );
};

export default MenuItemsControl;
