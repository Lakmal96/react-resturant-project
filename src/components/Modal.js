import React from "react";
import Backdrop from "./Backdrop";

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
    <div>
      <Backdrop showSummary={props.showSummary} clicked={props.modalClosed} />
      <div
        className="modal"
        style={{
          transform: props.showSummary ? "translateY(0)" : "translateY(-10rem)",
          opacity: props.showSummary ? "1" : "0",
          transition: "opacity 200ms ease-out, transform 300ms ease-out",
        }}
      >
        <h2>Your Order Summary!</h2>
        <ul className="modal-list">{orderSummary}</ul>
        <h3>Total Bill : {props.totalBill}</h3>
        <button className="success" onClick={props.clickedOrder}>
          Continue
        </button>
        <button className="danger" onClick={props.clickedCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
