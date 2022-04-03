import React from "react";
import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart, handleRemoveAllFromCart }) => {
  // Conditional rendering options
  // 1 Element variable
  // 2
  return (
    <div>
      <h2>Select item : {cart.length}</h2>
      {cart.map((tshirt) => (
        <p>
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
        </p>
      ))}
      {cart.length < 3 ? (
        <p>keep adding</p>
      ) : (
        <button onClick={() => handleRemoveAllFromCart()}>Remove All</button>
      )}
    </div>
  );
};

export default Cart;
