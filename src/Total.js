import React from "react";

const Total = ({ items }) =>
<div className="container">
  <p>Total Price: {
      items.reduce((acc, item) => {
        return (parseFloat(acc) + item.product.priceInCents / 100 * item.quantity).toFixed(2);
      }, 0)
    }</p>
</div>

export default Total;
