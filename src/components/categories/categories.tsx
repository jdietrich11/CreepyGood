import React from "react";

import categories from "../../assets/information/categories";

import "./categories.styles.scss";

const Categories: React.FC = () => {
  return (
    <div className="categoriesContainer">
      {categories.map((item) => {
        return (
          <div className="categoryContainer">
            <div className="category">{item}</div>
          </div>
        );
      })}
      <div>categories</div>
    </div>
  );
};

export default Categories;
