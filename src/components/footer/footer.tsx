import React from "react";

import "./footer.styles.scss";

const Footer: React.FC = () => {
  return (
    <div className="footerContainer">
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
  );
};

export default Footer;
