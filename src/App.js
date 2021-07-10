import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <Navbar nombreDeLaTienda="CATA" />
      <ItemCount unidad={0} stock={20} />
      <ItemListContainer />
    </div>
  );
}

export default App;
