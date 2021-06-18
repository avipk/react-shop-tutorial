import React from 'react';
import Product from './productPreview';

export default function SearchResults({ results, searchTerm }) {
  return (
    <div className="product-wrapper">
      {results && results.length > 0 ? (
        results.map((result) => <Product {...result} />)
      ) : (
        <div className="product-wrapper__no-results">
          No results found for <span className="search-term">'{searchTerm}'</span>
        </div>
      )}
    </div>
  );
}
