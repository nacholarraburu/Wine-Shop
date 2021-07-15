import React, { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [vinosDisplay, setVinosDisplay] = useState([]);

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
  const obtenerItemsVinos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(arrayItems);
      }, 3000);
    });
  };
  obtenerItemsVinos().then((result) => setVinosDisplay(result));

  return <ItemList vinosDisplay={vinosDisplay} />;
};

export default ItemListContainer;
