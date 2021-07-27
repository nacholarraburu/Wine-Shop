import React, { createContext, useState } from "react";
import Cart from "../components/Cart/Cart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const noInCart = (receivedItem) =>
    cart.filter((item) => item.id === receivedItem.id).length === 0;

  const inCart = (receivedItem) => {
    if (noInCart(receivedItem)) {
      setCart([...cart, receivedItem]);
    } else {
      alert("Ya lo ingresaste al carrito");
    }
  };

  const removeCart = (receivedItem) => {
    let allItems = cart.filter((item) => item.id !== receivedItem.id);

    setCart(allItems);
  };

  const limpiarCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ inCart, removeCart, limpiarCart }}>
      {children}
    </CartContext.Provider>
  );
};
