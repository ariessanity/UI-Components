import React from "react";
import "../Styles/ProductCard.scss";
import Counter from "./Counter";

function ProductCard({
  img,
  name,
  description,
  salePrice,
  originalPrice,
  discount,
}) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt="" />
        <span>-{discount}%</span>
      </div>
      <div className="card__info">
        <h1>
          {name} <span>{description}</span>
        </h1>
        <Counter />
        <h2>
          {salePrice}
          <del>{originalPrice}</del>
        </h2>
      </div>
    </div>
  );
}

export default ProductCard;
