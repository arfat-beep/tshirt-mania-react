import React, { useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";
import useTShirt from "../../Hooks/useTShirt";
import TShirt from "../TShirt/TShirt";
const Home = () => {
  const [tShirts, setTShirts] = useTShirt();
  const [cart, setCart] = useState([]);
  const handleAddToCart = (selectedItem) => {
    const exist = cart.find((tshirt) => tshirt._id === selectedItem._id);
    if (!exist) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("Item already added");
    }
  };
  const handleRemoveFromCart = (selectedItem) => {
    const rest = cart.filter((tshirt) => tshirt._id !== selectedItem._id);
    setCart(rest);
  };
  const handleRemoveAllFromCart = () => {
    setCart([]);
  };
  console.log(cart);
  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tShirts.map((tshirt) => (
          <TShirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleRemoveAllFromCart={handleRemoveAllFromCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
