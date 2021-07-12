import React from 'react';
import './Button.css';

// checking if its an operator ie NaN
const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
}

export const Button = props => <div className={`button-wrapper ${isOperator(props.children) ? null : "operator"}`}>{props.children}</div>

