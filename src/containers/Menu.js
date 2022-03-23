import React, { Component } from "react";
import MenuItems from "../components/MenuItems";

class Menu extends Component {
  state = {
    order: {
      pizza: 0,
      burger: 0,
      fries: 0,
      cola: 0,
    },
  };

  render() {
    return (
      <div>
        <MenuItems />
      </div>
    );
  }
}

export default Menu;
