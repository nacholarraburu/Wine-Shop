import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { CartProvider } from "./service/CartContext";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
// import { Cart } from "./components/Cart";

const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/categorias/:catId">
              <ItemListContainer />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            {/* <Route path="/cart">
              <Cart />
            </Route> */}
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
