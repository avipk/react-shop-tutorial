import React from 'react';
import SearchBar from '../components/searchBar';
import SearchResults from '../components/searchResults';

export default function MainPage() {
  const [results, setResults] = React.useState(null);

  const doSearch = (value) => {
    fetch(`/api-product/search/${value}`)
      .then((res) => res.json())
      .then((data) => setResults(data));
  };

  return (
    <main>
      <SearchBar onSubmit={doSearch} />
      <SearchResults results={results} />
    </main>
  );
}
