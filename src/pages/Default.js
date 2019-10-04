import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export class Default extends Component {
  render() {
    return (
      <Header title="404 Not Found" styleClasss="not-found">
        <h2 className="text-capitalize text-light">
          you are in the wrong place
        </h2>
        <Link
          to="/"
          className="text-uppercase btn btn-secondary btn-large mt-3"
        >
          Return Home
        </Link>
      </Header>
    );
  }
}

export default Default;
