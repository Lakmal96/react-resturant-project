import React from "react";

const Basket = (props) => {
  let orders = Object.keys(props.orderItems).map((orderItem) => {
    return (
      <span key={orderItem} style={{ textTransform: "Capitalize" }}>
        {orderItem} : {props.orderItems[orderItem]}
      </span>
    );
  });

  return (
    <div className="basket">
      {orders}
      <button>Order Now</button>
    </div>
  );
};

export default Basket;
