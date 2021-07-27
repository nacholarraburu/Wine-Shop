import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { catalogo } from "../../productos/catalogo.json";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [vinosDisplay, setVinosDisplay] = useState([]);

  const arrayItems = catalogo;

  const { catId } = useParams();

  useEffect(() => {
    setVinosDisplay([]);

    const obtenerItemsVinos = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (catId) {
            let filtroCatalogo = arrayItems.filter(
              (item) => item.categorias === catId
            );

            resolve(filtroCatalogo);
          } else {
            resolve(arrayItems);
          }
        }, 1000);
      });
    };

    obtenerItemsVinos().then((result) => setVinosDisplay(result));
  }, [catId, arrayItems]);

  return <ItemList vinosDisplay={vinosDisplay} />;
};

export default ItemListContainer;
