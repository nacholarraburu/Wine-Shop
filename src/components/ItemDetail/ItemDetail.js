import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ vinosToDisplay: item }) => {
  const [count, setCount] = useState(1);

  const [terminar, setTerminar] = useState(false);

  const resultadoState = () => setTerminar(!terminar);

  return (
    <div className="description">
      <h2>{item.nombre}</h2>
      <h4>${item.precio}</h4>
      <p>{item.varietal}</p>
      <img src={"/" + item.img} alt={item.nombre} />
      {!terminar ? (
        <>
          <ItemCount
            unidad={1}
            count={count}
            setCount={setCount}
            stock={item.stock}
          />
          <button onClick={resultadoState} className="botonCompra">
            COMPRAR
          </button>
        </>
      ) : (
        <>
          <Link to="/cart" onClick={resultadoState}>
            <button onClick={resultadoState}>TERMINAR MI COMPRA</button>
          </Link>
          <button onClick={resultadoState}>MODIFICAR</button>
        </>
      )}
    </div>
  );
};

export default ItemDetail;
