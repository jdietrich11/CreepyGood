import React from "react";

import Icon from "../../helper/icon/icon";
import Dropdown from "../dropdown/dropdown";

import footerOptions from "../../assets/information/footerOptions";

import "./footer.styles.scss";

const Footer: React.FC = () => {
  return (
    <div className="footerContainer">
      <div className="footerContainerImage">
        <div className="footer">
          <div className="iconContainer">
            <div className="followText">Follow us</div>
            <a href="http://facebook.com/CreepyGood">
              <Icon
                icon="facebook2"
                size="3rem"
                color="white"
                className="icon"
              />
            </a>
            <a href="http://instagram.com/Creepy_Good">
              <Icon
                icon="instagram"
                size="3rem"
                color="white"
                className="icon"
              />
            </a>
          </div>
          {footerOptions.map((item) => {
            return <Dropdown name={item.name} options={item.options} />;
          })}
          <div className="subscribeContainer">
            <div className="subscribe">Subscribe Now</div>
            <div className="subtitle">
              subscribe and be the first to hear about new releases and special
              offers!
            </div>
            <div className="inputContainer">
              <input
                type="email"
                placeholder="email address"
                className="input"
              />
              <div className="subscribeBtn">sign up</div>
            </div>
          </div>
          <div className="textContainer">
            <div>
              Powered by{" "}
              <a
                className="link"
                href="https://www.threadless.com/artist-shops/signup?thref=shop_creepygood&utm_medium=artist_shop&utm_source=creepygood&utm_campaign=powered_by"
              >
                Threadless Artist Shops
              </a>
            </div>
            <div>&copy;CreepyGood's Artist Shop</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
