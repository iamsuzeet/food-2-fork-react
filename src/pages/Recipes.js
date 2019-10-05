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
    loading: true,
    base_url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
    query: `&q=`,
    error: "",
    searched: ""
  };

  async getRecipes() {
    try {
      const res = await axios.get(this.state.url);
      const recipes = res.data.recipes;
      console.log(recipes);

      if (recipes.length === 0) {
        this.setState({
          error:
            "Sorry recipe for this search cannot be found. Please try again or press search icon for the most popular recipes",
          loading: false,
          searched: ""
        });
        console.log(this.state);
      } else {
        this.setState({ recipes, loading: false, error: "" });
      }
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
    const { base_url, query, search } = this.state;
    this.setState(
      {
        url: `${base_url}${query}${search}`,
        searched: search,
        search: ""
      },
      () => this.getRecipes()
    );
  };

  renderList = (loading, error, recipes, searched) => {
    if (loading) {
      return <Spinner mtop="15%" />;
    } else {
      if (error) {
        return (
          <section>
            <div className="row">
              <div className="col">
                <h2 className="text-dark text-center text-capitalize text-slanted mt-5">
                  {error}
                </h2>
              </div>
            </div>
          </section>
        );
      } else {
        return <RecipeList recipes={recipes} searched={searched} />;
      }
    }
  };

  render() {
    const { search, recipes, loading, searched, error } = this.state;

    return (
      <>
        <Search
          search={search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.renderList(loading, error, recipes, searched)}
      </>
    );
  }
}

export default Recipes;
