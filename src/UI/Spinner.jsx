import React from "react";

const Spinner = props => {
  return (
    <div className="d-flex justify-content-center" style={{ marginTop: "50%" }}>
      <div
        className="spinner-border"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="sr-only">{props.message}</span>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
