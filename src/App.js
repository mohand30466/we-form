import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Getdata from "./components/getdata";
import Products from "./components/Products.component";
import Deleteitems from "./components/deleteitm"

function App() {
  return (
    <div className="app2">
      <Router>
        <Switch>
          <Route exact path="/">
            <Products></Products>
          </Route>
          <Route exact path="/employeedb">
            <Getdata></Getdata>
          </Route>
          <Route exact path="/deleteItem">
            <Deleteitems/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
