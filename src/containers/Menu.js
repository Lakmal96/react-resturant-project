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
    purchaceOrder: false,
    showSummary: false,
  };

  updatePurchaseOrderState(order) {
    const sum = Object.keys(order)
      .map((orderItem) => {
        return order[orderItem];
      })
      .reduce((sum, val) => {
        return sum + val;
      }, 0);
    this.setState({ purchaceOrder: sum > 0 });
  }

  addItemListner = (item) => {
    const updatedOrder = { ...this.state.order };
    updatedOrder[item] = this.state.order[item] + 1;

    const updatedBill = this.state.bill + prices[item];

    this.setState({ order: updatedOrder, bill: updatedBill });
    this.updatePurchaseOrderState(updatedOrder);
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
    this.updatePurchaseOrderState(updatedOrder);
  };

  purchaseCancelHandler = () => {
    this.setState({ showSummary: false });
  };

  showSummaryHandler = () => {
    this.setState({ showSummary: true });
  };

  purchaceOrderHandler = () => {
    alert("Continue");
  };

  render() {
    return (
      <div className="menu">
        <Modal
          order={this.state.order}
          showSummary={this.state.showSummary}
          totalBill={this.state.bill}
          modalClosed={this.purchaseCancelHandler}
          clickedOrder={this.purchaceOrderHandler}
          clickedCancel={this.purchaseCancelHandler}
        />
        <MenuItems
          itemAdded={this.addItemListner}
          itemRemoved={this.removeItemListner}
        />

        <Basket
          orderItems={this.state.order}
          totalBill={this.state.bill}
          purchasable={this.state.purchaceOrder}
          showSummary={this.showSummaryHandler}
        />
      </div>
    );
  }
}

export default Menu;
