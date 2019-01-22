import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
import CartItems from "./CartItems";
import AddItem from "./AddItem";
import Total from "./Total";

class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    let cartItemsList;

    const existing = this.state.cartItemsList.findIndex(
      item => item.product.name === this.state.selection.product
    );


    const productValue = this.state.selection.product


    const product = this.state.products.reduce((acc, curr) => {
      if (curr.name === productValue) return curr;
      else return acc;
    }, {});

    const quantity = this.state.selection.quantity;


    if (existing >= 0) {
      cartItemsList = [ ...this.state.cartItemsList ]
      cartItemsList[existing].quantity += quantity

    } else {
      const id = this
        .state
        .cartItemsList
        .reduce((max, item) => {
          return item.id + 1 > max ? item.id + 1 : max;
        }, 0);

      cartItemsList = [
        ...this.state.cartItemsList,
        { id, product,
          quantity
        }];
    }

    this.setState({
      ...this.state,
      cartItemsList,
      selection: {
        product: "Mediocre Iron Watch",
        quantity: 1
      }
    });
  }

  handleChange = (
    product = this.state.selection.product,
    quantity = this.state.selection.quantity
  ) => {
    this.setState({
      ...this.state,
      selection: {product, quantity: parseInt(quantity)}
    })
  }

  state = {
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }
    ],
    cartItemsList: [
      {
        id: 1,
        product: {
          id: 40,
          name: 'Mediocre Iron Watch',
          priceInCents: 399
        },
        quantity: 1
      },
      {
        id: 2,
        product: {
          id: 41,
          name: 'Heavy Duty Concrete Plate',
          priceInCents: 499
        },
        quantity: 2
      },
      {
        id: 3,
        product: {
          id: 42,
          name: 'Intelligent Paper Knife',
          priceInCents: 1999
        },
        quantity: 1
      }
    ],
    selection: {
      product: 'Mediocre Iron Watch',
      quantity: 1
    }
  }

  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems
          items={ this.state.cartItemsList }
        />
        <Total items={ this.state.cartItemsList } />
        <AddItem
          products={ this.state.products }
          handleChange={ this.handleChange }
          selection={ this.state.selection }
          handleSubmit={ this.handleSubmit }
        />
        <CartFooter
          copyright="2018"
        />
      </div>
    );
  }
}

export default App;
