import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="description">
      <Link to={`/item/${item.id}`}>
        <h2>{item.nombre}</h2>
        <p>{item.varietal}</p>
        <img src={item.img} alt={item.nombre} width="50%" height="50%" />
      </Link>
    </div>
  );
};
export default Item;
