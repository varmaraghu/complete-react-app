import React, { Component } from "react";

import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.4,
  cheese: 0.5,
  meat: 1.5,
  bacon: 2.5,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 4,
    canOrder: false,
    showOrderSummary: false,
  };

  updateOrderButton = (ingredients) => {
    const ingredientsCount = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ canOrder: ingredientsCount > 0 });
  };

  addIngredientsHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    //update the price
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updateOrderButton(updatedIngredients);
  };

  removeIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    //update the price
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updateOrderButton(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ showOrderSummary: true });
  };

  render() {
    const disabledIngredient = { ...this.state.ingredients };

    for (let key in disabledIngredient) {
      disabledIngredient[key] = disabledIngredient[key] <= 0;
    }

    return (
      <Auxiliary>
        <Modal show={this.state.showOrderSummary}>
          {<OrderSummary ingredients={this.state.ingredients} />}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          insertIngredient={this.addIngredientsHandler}
          removeIngredient={this.removeIngredientsHandler}
          disableInfo={disabledIngredient}
          price={this.state.totalPrice}
          canPurchase={this.state.purchaseHandler}
          canOrder={this.state.canOrder}
        />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
