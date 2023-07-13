import React from "react";

import Icon from "../../helper/icon/icon";
import Dropdown from "../dropdown/dropdown";

import footerOptions from "../../assets/information/footerOptions";

import "./footer.styles.scss";

const Footer: React.FC = () => {
  return (
    <div className="footerContainer">
      <div className="footerContainerImage">
        <div className="iconContainer">
          <div className="followText">Follow us</div>
          <a href="http://facebook.com/CreepyGood">
            <Icon icon="facebook2" size="3rem" color="white" className="icon" />
          </a>
          <a href="http://instagram.com/Creepy_Good">
            <Icon icon="instagram" size="3rem" color="white" className="icon" />
          </a>
        </div>
        {footerOptions.map((item) => {
          return <Dropdown name={item.name} options={item.options} />;
        })}
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
          <div>
            &copy;CreepyGood's Artist Shop /{" "}
            <a className="link" href="#">
              Help & Returns
            </a>{" "}
            /{" "}
            <a className="link" href="#">
              Legal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
