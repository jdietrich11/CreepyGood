import React from "react";

import FeaturedProduct from "../../components/feature/feature";
import TagBanner from "../../components/tagBanner/tagBanner";

const HomePage: React.FC = () => {
  return (
    <>
      <FeaturedProduct />
      <TagBanner />
    </>
  );
};

export default HomePage;
