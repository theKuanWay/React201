import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../Hero/Hero";
import { useEffect } from "react";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ff17f76a0910d30be29baf43308e80be&language=en-US`
    )
      .then(response => response.json())
      .then(data => {
        setMovieDetails(data);
        setIsLoading(false);
      })
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {

      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`

      return (
        <>
        <Hero text={movieDetails.original_title} />;
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3"><img src={posterPath} alt="..." className="img-fluid shadow rounded" /></div>
            <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
            </div>
          </div>
        </div>
        </>
      )
    }
  }

  return renderMovieDetails();
};

export default MovieView;
