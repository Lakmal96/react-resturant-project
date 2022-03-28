import React, { Component } from "react";
import Basket from "../components/Basket";
import MenuItems from "../components/MenuItems";
import Modal from "../components/Modal";

const prices = {
  pizza: 1200,
  burger: 900,
  fries: 450,
  cola: 300,
};

class Menu extends Component {
  state = {
    order: {
      pizza: 0,
      burger: 0,
      fries: 0,
      cola: 0,
    },
    bill: 0,
  };

  addItemListner = (item) => {
    const updatedOrder = { ...this.state.order };
    updatedOrder[item] = this.state.order[item] + 1;

    const updatedBill = this.state.bill + prices[item];

    this.setState({ order: updatedOrder, bill: updatedBill });
  };

  removeItemListner = (item) => {
    const updatedOrder = { ...this.state.order };
    if (updatedOrder[item] >= 1) {
      updatedOrder[item] = this.state.order[item] - 1;
    } else {
      return;
    }
    const updatedBill = this.state.bill - prices[item];
    this.setState({ order: updatedOrder, bill: updatedBill });
  };

  render() {
    return (
      <div className="menu">
        <Modal order={this.state.order} />
        <MenuItems
          itemAdded={this.addItemListner}
          itemRemoved={this.removeItemListner}
        />

        <Basket orderItems={this.state.order} totalBill={this.state.bill} />
      </div>
    );
  }
}

export default Menu;
