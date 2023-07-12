import React from "react";

import FeaturedProduct from "../../components/feature/feature";
import TagBanner from "../../components/tagBanner/tagBanner";
import Categories from "../../components/categories/categories";
import BestSellers from "../../components/bestSellers/bestSellers";

const HomePage: React.FC = () => {
  return (
    <>
      <FeaturedProduct />
      <TagBanner />
      <Categories />
      <BestSellers />
    </>
  );
};

export default HomePage;
