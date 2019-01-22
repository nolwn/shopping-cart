import React from "react";

import OptionItem from "./OptionItem";

const AddItem = ({ products, handleSubmit, handleChange, selection }) =>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <form onSubmit={ handleSubmit }>
          <label forhtml="quantity">Quantity</label>
          <input
            type="number"
            name="quantity"
            className="form-control"
            onChange= { e => handleChange(undefined, e.target.value) }
            value={ selection.quantity }
            ></input>
          <label forhtml="product">Product</label>
          <select
            onChange={ e => handleChange(e.target.value) }
            value={selection.product}
            name="product"
            className="form-control"
          >
            {
              products.map((product, index) =>
                <OptionItem
                  key={ index }
                  product={ product }
                  handleChange={ handleChange }
                />)
            }
          </select>
          <button
            type="submit"
            className="btn btn-primary"
          >Submit</button>
        </form>
      </div>
    </div>
  </div>;

export default AddItem;
