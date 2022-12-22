import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

export default function MoviePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const movieId = useParams();

  const API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${movieId.id}`;

  const movieData = async (url) => {
    try {
      const singledata = await fetch(url);
      const singlejsonData = await singledata.json();
      if (singlejsonData.Response === "True") {
        setIsLoading(false);
        setMovie(singlejsonData);
      } else {
        setIsLoading(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      movieData(API);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [movieId]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center movie">
      <div className="card shadow rounded mb-3" style={{ width: "50vw" }}>
        <div className="row g-0">
          <div className="card-img-cont col-md-4 d-flex align-items-center">
            <img
              src={movie.Poster}
              className="img-fluid rounded-start"
              alt="poster"
            />
          </div>
          <div className="card-right col-md-8">
            <div className="card-body ms-3">
              <h5 className="card-title my-4">{movie.Title}</h5>
              <p className="card-text">
                <span>Actors:</span> {movie.Actors}
              </p>
              <p className="card-text">
                <span>Director:</span> {movie.Director}
              </p>
              <p className="card-text">
                <span>Genre:</span> {movie.Genre}
              </p>
              <p className="card-text">
                <span>Language:</span> {movie.Language}
              </p>
              <p className="card-text">
                <span>Released On:</span> {movie.Released}
              </p>
              <p className="card-text">
                <span>Imdb Rating:</span> {movie.imdbRating}
              </p>
              <p className="card-text">
                <span>Summary:</span> {movie.Plot}
              </p>
              <div className="button text-center">
                <NavLink className="btn btn-success " to="/">
                  Go Back
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
