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
    },
    {
      id: 2,
      nombre: "Catena Zapata",
      precio: 1800,
      stock: 100,
      img: "./img/catena.jpg",
    },
    {
      id: 3,
      nombre: "Luigi Bosca",
      precio: 1200,
      stock: 80,
      img: "./img/luigi.jpg",
    },
    {
      id: 4,
      nombre: "Rutini",
      precio: 2500,
      stock: 30,
      img: "./img/rutini.jpg",
    },
    {
      id: 5,
      nombre: "Sapo de Otro Pozo",
      precio: 500,
      stock: 10,
      img: "./img/sapo.jpg",
    },
    {
      id: 6,
      nombre: "Familia Gascon",
      precio: 1400,
      stock: 45,
      img: "./img/familia.jpg",
    },
  ];

  const obtenerItemsVinos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(arrayItems);
      }, 2000);
    });
  };
  obtenerItemsVinos().then((result) => setVinosDisplay(result));

  return <ItemList vinosDisplay={vinosDisplay} />;
};

export default ItemListContainer;
