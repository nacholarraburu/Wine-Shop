import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ unidad, stock }) => {
  const [cantidad, setCantidad] = useState(unidad);

  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    cantidad > unidad && setCantidad(cantidad - 1);
  };
  return (
    <div className="contadorconteiner">
      <button className="boton" onClick={handleRestar}>
        -
      </button>
      <p className="cantidadcss">{cantidad}</p>
      <button className="boton" onClick={handleSumar}>
        +
      </button>
    </div>
  );
};
export default ItemCount;
