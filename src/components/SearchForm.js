import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
          <input
            id="name"
            ref={inputRef}
            onChange={(e) => {
              setSearchTerm(inputRef.current.value);
            }}
            type="text"
            placeholder="Search cocktail..."
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
