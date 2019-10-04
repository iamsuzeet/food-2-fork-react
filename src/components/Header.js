import React from "react";

const Header = ({ children, title, styleClasss }) => {
  return (
    <header>
      <div className="container-fluid">
        <div className={`row align-items-center ${styleClasss}`}>
          <div className="col text-center">
            <h1 className="text-light text-uppercase display-3 letter-spacing text-slanted">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "default title",
  styleClasss: "header-hero"
};

export default Header;
