import React from "react";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="description">
      <h1>{item.nombre}</h1>
      <h4>${item.precio}</h4>
      <img src={item.img} alt="bla" />
    </div>
  );
};
export default Item;
