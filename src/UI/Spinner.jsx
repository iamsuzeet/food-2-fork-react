import React from "react";

const Spinner = ({ message, mtop }) => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: `${mtop}` }}
    >
      <div
        className="spinner-border"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="sr-only">{message}</span>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading...",
  mtop: "50%"
};

export default Spinner;
