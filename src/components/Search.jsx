import React, { useState } from "react";

function Search(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const onSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
  };
  let filteredHomes = props.result.filter((item) => {
    return item.code.toUpperCase().indexOf(searchQuery.toUpperCase()) !== -1;
  });

  const searchFunction = () => {
    props.setStatus(filteredHomes);
    console.log(filteredHomes);
    setSearchQuery("");
  };
  return (
    <div
      style={
        props.mode === "light"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#282828" }
      }
    >
      <h2 className="text-info">SEARCH</h2>
      <hr />
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Apartment's code"
          aria-label="Apartment's code"
          aria-describedby="button-addon2"
          value={searchQuery}
          onChange={onSearch}
        />
        <button
          className="btn btn-outline-info"
          type="button"
          id="button-addon2"
          onClick={searchFunction}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
