import React, { Component } from "react";
import Basket from "../components/Basket";
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

  addItemListner = (item) => {
    const updatedOrder = { ...this.state.order };
    updatedOrder[item] = this.state.order[item] + 1;
    this.setState({ order: updatedOrder });
  };

  removeItemListner = (item) => {
    const updatedOrder = { ...this.state.order };
    if (updatedOrder[item] >= 1) {
      updatedOrder[item] = this.state.order[item] - 1;
    } else {
      return;
    }
    this.setState({ order: updatedOrder });
  };

  render() {
    return (
      <div className="menu">
        <MenuItems
          itemAdded={this.addItemListner}
          itemRemoved={this.removeItemListner}
        />
        <Basket orderItems={this.state.order} />
      </div>
    );
  }
}

export default Menu;
