import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { catalogo } from "../../productos/catalogo.json";

const ItemDetailContainer = () => {
  const arrayItems = catalogo;

  const [vinosToDisplay, setVinosToDisplay] = useState();

  const { id: idParams } = useParams();

  const obtenerItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(arrayItems.find((item) => item.id.toString() === idParams));
      }, 1000);
    });
  };

  useEffect(
    () => {
      setVinosToDisplay();
      obtenerItem().then((result) => setVinosToDisplay(result));
    },
    // eslint-disable-next-line
    [idParams]
  );
  return (
    <>{vinosToDisplay && <ItemDetail vinosToDisplay={vinosToDisplay} />}</>
  );
};
export default ItemDetailContainer;
