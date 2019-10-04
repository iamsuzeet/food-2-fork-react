import React, { Component } from "react";
import axios from "axios";

import Search from "./../components/Search";
import RecipeList from "../components/RecipeList";
import Spinner from "./../UI/Spinner";

export class Recipes extends Component {
  state = {
    recipes: [],
    search: "",
    url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
    loading: true
  };

  async getRecipes() {
    try {
      const res = await axios.get(this.state.url);
      const recipes = res.data.recipes;

      this.setState({ recipes, loading: false });
    } catch (e) {
      console.log(e);
    }
  }
  componentDidMount() {
    this.getRecipes();
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { search, recipes, loading } = this.state;

    return (
      <>
        <Search
          search={search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {loading ? <Spinner mtop="15%" /> : <RecipeList recipes={recipes} />}
      </>
    );
  }
}

export default Recipes;
