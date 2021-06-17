import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductPreview({ _id, name, description, imageUrl, price }) {
  return (
    <div className="product">
      <div className="product__title">
        <Link to={`/product/${_id}`}>{name}</Link>
      </div>
      <div className="product__image">
        <img alt={name} src={imageUrl} />
      </div>
      <div className="product__price">{price}</div>
      <div className="product__desc">{description}</div>
    </div>
  );
}
