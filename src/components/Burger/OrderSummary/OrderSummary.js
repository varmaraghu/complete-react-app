import React from "react";

import Auxiliary from "../../../hoc/Auxiliary";

const OrderSummary = (props) => {
  const listOfIngredients = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ transform: "capitalize" }}> {igKey}</span> :{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>Burger with following ingredients!</p>
      <ul>{listOfIngredients}</ul>
      <p>Continue to Checkout?</p>
    </Auxiliary>
  );
};

export default OrderSummary;
