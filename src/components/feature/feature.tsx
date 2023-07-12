import React, { useState, useEffect } from "react";

import "./featureStyles.scss";

const FeaturedProduct: React.FC = () => {
  const [featureColor, setFeatureColor] = useState("White");

  const featureSource = require(`../../assets/Images/FeatureShirt${featureColor}.jpg`);

  return (
    <div className="featureProduct">
      <div className="featureBackgroundCover">
        <div>New exclusive</div>
        <div className="featureImgContainer">
          <img
            src={featureSource}
            alt="new shirt product"
            className="featureImg"
          />
        </div>
        <div className="featureTextContainer">
          <div className="featureText">
            Limited time only! Creepy good exclusive design!!!
          </div>
          <div className="colorBoxContainer">
            <div
              className="colorBox white"
              onClick={() => setFeatureColor("White")}
            ></div>
            <div
              className="colorBox black"
              onClick={() => setFeatureColor("Black")}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
