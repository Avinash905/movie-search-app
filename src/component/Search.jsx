import React, { useContext } from "react";
import { AppContext } from "./Context";

export default function Search() {
  const { query, setQuery, isError } = useContext(AppContext);
  return (
    <>
      <div className="input-cont d-flex flex-column justify-content-center my-5">
        <h2>Search your favourite movie</h2>
        <div className="input mx-auto my-3">
          <input
            type="text"
            name="movie_name"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <p className="error text-center">{isError.show && isError.msg}</p>
      </div>
    </>
  );
}
