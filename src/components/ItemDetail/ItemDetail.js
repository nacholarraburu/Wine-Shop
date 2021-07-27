import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../service/CartContext";

const ItemDetail = ({ vinosToDisplay: item }) => {
  const { inCart, removeCart } = useContext(CartContext);

  const [count, setCount] = useState(1);

  const [terminar, setTerminar] = useState(false);

  const resultadoState = () => setTerminar(!terminar);

  const resultadoEnviado = () => {
    inCart({ ...item, quantity: count });
  };

  const resultadoRemove = () => {
    removeCart(item);
  };

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
          <button
            className="botonCompra"
            onClick={() => {
              resultadoState();
              resultadoEnviado();
            }}
          >
            COMPRAR
          </button>
        </>
      ) : (
        <>
          <Link to="/cart" onClick={resultadoState}>
            <button onClick={resultadoState}>TERMINAR MI COMPRA</button>
          </Link>
          <button
            onClick={() => {
              resultadoState();
              resultadoRemove();
            }}
          >
            MODIFICAR
          </button>
        </>
      )}
    </div>
  );
};

export default ItemDetail;
