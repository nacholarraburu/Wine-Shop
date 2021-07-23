import React from "react";
import "./ItemCount.css";

const ItemCount = ({ unidad, stock, count, setCount }) => {
  const handleSumar = () => {
    count < stock && setCount(count + 1);
  };

  const handleRestar = () => {
    count > unidad && setCount(count - 1);
  };
  return (
    <div className="contadorconteiner">
      <button className="boton" onClick={handleRestar}>
        -
      </button>
      <p className="cantidadcss">{count}</p>

      <button className="boton" onClick={handleSumar}>
        +
      </button>
    </div>
  );
};
export default ItemCount;
