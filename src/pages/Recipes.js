import React, { Component } from "react";
import Search from "./../components/Search";
import RecipeList from "../components/RecipeList";

import { recipeData } from "./../data/tempList";

export class Recipes extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    recipes: recipeData,
    search: ""
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { search, recipes } = this.state;

    return (
      <>
        <Search
          search={search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={recipes} />
      </>
    );
  }
}

export default Recipes;
