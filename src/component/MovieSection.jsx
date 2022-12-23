import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./Context";

export default function MovieSection() {
  const { movie, isLoading } = useContext(AppContext);
  if (isLoading) {
    return <div className="movies-loading">Loading...</div>;
  }
  return (
    <>
      <div className="container grid-four my-5">
        {movie.map((currEle) => {
          const movieName = currEle.Title.substring(0, 15);
          return (
            <NavLink
              key={currEle.imdbID}
              to={`/movie-search-app/movie/${currEle.imdbID}`}
            >
              <div className="card-own">
                <div className="img-cont">
                  <h2 className="title">
                    {movieName.length > 13 ? `${movieName}...` : movieName}
                  </h2>
                  <img
                    src={currEle.Poster}
                    className="img-poster"
                    alt="movie poster"
                  />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
