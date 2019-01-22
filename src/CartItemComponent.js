import React from "react";

const CartItemComponent = ({ name, priceInCents, quantity }) =>
  <div className="list-group-item">
    <div className="row">
      <div className="col-md-8">{ name }</div>
      <div className="col-md-2">{ (priceInCents / 100).toFixed(2) }</div>
      <div className="col-md-2">{ quantity }</div>
    </div>
  </div>;

export default CartItemComponent;
