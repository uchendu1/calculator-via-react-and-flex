import React from "react";
import "./Button.css";

// checking if its an operator ie NaN
const isOperator = (val) => {
//  return  (typeof val !== "number") || val === "." || val === "="
  return !isNaN(val) || val === "." || val === "=";

};



export const Button = (props) => (
  <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);
