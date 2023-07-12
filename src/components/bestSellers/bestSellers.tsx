import React from "react";

import bestSellers from "../../assets/information/bestSellers";
import ItemCard from "../itemCard/itemCard";

import "./bestSellers.styles.scss";

const BestSellers: React.FC = () => {
  return (
    <div className="bestSellersContainer">
      <div className="bestSellersTitle">Shop best sellers</div>
      <div className="itemCardsContainer">
        {bestSellers.map((item) => {
          return (
            <ItemCard
              id={item.id}
              name={item.name}
              type={item.type}
              price={item.price}
              img={item.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSellers;
