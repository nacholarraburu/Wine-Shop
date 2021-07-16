import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const arrayItems = [
    {
      id: 1,
      nombre: "Padrillos",
      precio: 800,
      stock: 50,
      img: "./img/padrillos.jpg",
      varietal: "Pinot Noir",
    },
    {
      id: 2,
      nombre: "Catena Zapata",
      precio: 1800,
      stock: 100,
      img: "./img/catena.jpg",
      varietal: "Malbec",
    },
    {
      id: 3,
      nombre: "Luigi Bosca",
      precio: 1200,
      stock: 80,
      img: "./img/luigi.jpg",
      varietal: "Merlot",
    },
    {
      id: 4,
      nombre: "Rutini",
      precio: 2500,
      stock: 30,
      img: "./img/rutini.jpg",
      varietal: "Pinot Blanc",
    },
    {
      id: 5,
      nombre: "Sapo de Otro Pozo",
      precio: 500,
      stock: 10,
      img: "./img/sapo.jpg",
      varietal: "Cabernet Sauvignon",
    },
    {
      id: 6,
      nombre: "Familia Gascon",
      precio: 1400,
      stock: 45,
      img: "./img/familia.jpg",
      varietal: "Chardonnay",
    },
  ];

  const [vinosToDisplay, setVinosToDisplay] = useState();

  const { id: idParams } = useParams();

  const obtenerItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(arrayItems.find((item) => item.id.toString() === idParams));
      }, 3000);
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
