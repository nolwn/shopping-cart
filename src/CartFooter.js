import React from "react";

const CartFooter = ({ copyright }) =>
  <nav className="navbar navbar-dark bg-dark">
    <span className="navbar-brand" href="#">&copy; { copyright }</span>
  </nav>;

export default CartFooter;
