import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ vinosToDisplay: item }) => {
  return (
    <div className="description">
      <h2>{item.nombre}</h2>
      <h4>${item.precio}</h4>
      <p>{item.varietal}</p>
      <img src={"/" + item.img} alt={item.nombre} />
      <ItemCount unidad={1} stock={item.stock} />
      <button className="botonCompra">COMPRAR</button>
    </div>
  );
};

export default ItemDetail;
