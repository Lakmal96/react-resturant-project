import React from "react";

const Backdrop = (props) => {
  return props.showSummary ? (
    <div className="backdrop" onClick={props.clicked}></div>
  ) : null;
};

export default Backdrop;
