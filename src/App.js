import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Default from "./pages/Default";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import Navbar from "./components/Navbar";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main>
          <Switch>
            <Route path="/recipes/:id" component={SingleRecipe} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/not-found" component={Default} />

            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
