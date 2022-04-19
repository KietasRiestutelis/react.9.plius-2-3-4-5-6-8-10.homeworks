import React from "react";
import "./Box.css";

function Box() {
  return (
    <div className="row d-flex justify-content-between ">
      <div className="Box-One col-3 bg-warning"></div>
      <div className="Box-Two col-3 bg-primary"></div>
      <div className="Box-Three col-3 bg-danger"></div>
    </div>
  );
}

export default Box;
