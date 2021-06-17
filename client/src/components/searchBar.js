import React from 'react';

export default function SearchBar({ onSubmit }) {
  const inputRef = React.useRef();

  const onFormSubmit = React.useCallback(
    (event) => {
      event.preventDefault();

      const value = inputRef.current.value;
      onSubmit && onSubmit(value);

      return false;
    },
    [onSubmit],
  );

  return (
    <form className="search" onSubmit={onFormSubmit}>
      <input type="text" size="50" ref={inputRef} placeholder="חיפוש לפי שם מוצר" />
      <button type="submit">חפש</button>
    </form>
  );
}
