import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";

import Search from "./../components/Search";
import RecipeList from "../components/RecipeList";
import Spinner from "./../UI/Spinner";
import Pagination from "../components/resusable/Pagination";

import { paginate } from "../utils/paginate";

export class Recipes extends Component {
  state = {
    recipes: [],
    search: "",
    url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
    loading: true,
    base_url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
    query: `&q=`,
    error: "",
    searched: "",
    currentPage: 1,
    pageSize: 6,
    sortColumn: { path: "title", order: "asc" }
  };

  async getRecipes() {
    try {
      const res = await axios.get(this.state.url);
      const recipes = res.data.recipes;

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

  renderList = (
    loading,
    error,
    recipes,
    searched,
    pageSize,
    totalCount,
    currentPage
  ) => {
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
        return (
          <React.Fragment>
            <RecipeList recipes={recipes} searched={searched} />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </React.Fragment>
        );
      }
    }
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      recipes: allRecipes
    } = this.state;

    const sorted = _.orderBy(allRecipes, [sortColumn.path], [sortColumn.order]);

    const recipes = paginate(sorted, currentPage, pageSize);

    return { totalCount: allRecipes.length, data: recipes };
  };

  render() {
    const {
      search,
      loading,
      searched,
      error,
      pageSize,
      currentPage
    } = this.state;

    const { totalCount, data: recipes } = this.getPagedData();

    return (
      <>
        <Search
          search={search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.renderList(
          loading,
          error,
          recipes,
          searched,
          pageSize,
          totalCount,
          currentPage
        )}
      </>
    );
  }
}

export default Recipes;
