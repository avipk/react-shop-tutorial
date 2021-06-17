import React from 'react';
import Product from './productPreview';

export default function SearchResults({ results }) {
  return (
    <div className="product-wrapper">
      {results && results.map((result) => <Product {...result} />)}
    </div>
  );
}
