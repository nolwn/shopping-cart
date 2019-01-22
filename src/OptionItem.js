import React from "react";

const OptionItem = ({ product, selected }) =>
    <option key={product} >
      { product.name }
    </option>

export default OptionItem;
