import React from "react";

const Modal = (props) => {
  let orderSummary = Object.keys(props.order).map((orderItem) => {
    return (
      <li key={orderItem}>
        <span style={{ textTransform: "Capitalize" }}>
          <strong>{orderItem}</strong>
        </span>{" "}
        : {props.order[orderItem]}
      </li>
    );
  });

  return (
    <div className="modal">
      <h2>Your Order Summary!</h2>
      <ul className="modal-list">{orderSummary}</ul>
      <button>Continue</button>
      <button>Cancel</button>
    </div>
  );
};

export default Modal;
