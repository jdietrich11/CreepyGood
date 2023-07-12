import React from "react";

import "./itemCard.styles.scss";

interface ItemProps {
  id: number;
  name: string;
  type: string;
  price: string;
  img: string;
}

const ItemCard: React.FC<ItemProps> = (props) => {
  const { name, type, price, img } = props;

  return (
    <div className="itemContainer">
      <img src={img} alt={name} className="itemImg" />
      <div className="itemName">{name}</div>
      <div className="itemType">{type}</div>
      <div className="itemPrice">${price}</div>
    </div>
  );
};

export default ItemCard;
