import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar nombreDeLaTienda="CATA" />

      <ItemListContainer
        msjBienvenida="BIENVENIDOS A CATA, TU TIENDA DE VINOS. PRÓXIMAMENTE PODRáS CONOCER
      NUESTRO CATÁLOGO"
      />
    </div>
  );
}

export default App;
