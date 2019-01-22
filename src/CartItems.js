import React from "react";

import CartItemComponent from "./CartItemComponent";

const CartItems = ({ items }) =>
  <div className="container">
    <h1>Items</h1>
    <div className="list-group">
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-8">Product</div>
          <div className="col-md-2">Price</div>
          <div className="col-md-2">Quantity</div>
        </div>
      </div>
      {
        items.map(({ id, product: { name, priceInCents }, quantity }, index) =>
        <CartItemComponent
          key={ index }
          name={ name }
          priceInCents={ priceInCents }
          quantity={ quantity }
        />)
      }
    </div>
  </div>;

export default CartItems;
