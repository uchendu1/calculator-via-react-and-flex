import React from "react";
import "./Button.css";

// isOperator only checks for numbers, it activates the classes in the button.css 
const isOperator = (val) => {
//  return  (typeof val !== "number") || val === "." || val === "="
  return !isNaN(val) || val === "." || val === "=";

};



export const Button = (props) => (
  <div
    className={`button-wrapper ${isOperator(props.children) ? null : "operator"}`}
    onClick={() => props.handleClick(props.children)}>
    {props.children}
  </div>
);
