import React from "react";

import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

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
      <p>
        Your Order Price is :<strong> {props.totalprice.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Auxiliary>
  );
};

export default OrderSummary;
