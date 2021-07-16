import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar nombreDeLaTienda="CATA" />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
