import React from "react";

import Icon from "../../helper/icon/icon";

import "./tagBanner.styles.scss";

const TagBanner: React.FC = () => {
  return (
    <div className="tagBannerContainer">
      <div className="tagLineContainer">
        <div className="imgContainer">
          <div className="logo"></div>
        </div>
        <div className="tagLine">
          <div className="tagLineText">
            You choose any of our spooky design, add them to dozens of apperal,
            accessories, or a variety of prints
          </div>
          <div className="iconContainer">
            <Icon icon="facebook2" size="4rem" color="blue" className="icon" />
            <Icon
              icon="instagram"
              size="4rem"
              color="purple"
              className="icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagBanner;
