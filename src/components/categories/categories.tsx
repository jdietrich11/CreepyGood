import React from "react";

import categories from "../../assets/information/categories";

import "./categories.styles.scss";

const Categories: React.FC = () => {
  return (
    <div className="categoriesContainer">
      <div className="categories">
        {categories.map((item) => {
          return (
            <div className="categoryContainer">
              <div className="category">{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
