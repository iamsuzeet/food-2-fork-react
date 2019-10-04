import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Recipe extends Component {
  render() {
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id
    } = this.props.recipe;

    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card" style={{ height: "100%" }}>
          <img
            src={image_url}
            alt={title}
            style={{ height: "14rem" }}
            className="img-card-top"
          />
          <div className="card-body text-capitalize">
            <h6>{title}</h6>
            <h6 className="text-dark text-slanted">provided by {publisher}</h6>
          </div>
          <div className="card-footer">
            <Link
              to={`/recipes/${recipe_id}`}
              className="btn btn-primary text-capitalize"
            >
              Get Details
            </Link>
            <a
              className="btn btn-success mx-2 text-capitalize"
              href={source_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Recipe Url
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
