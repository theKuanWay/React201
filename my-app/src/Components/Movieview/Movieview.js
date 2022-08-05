import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../Hero/Hero";
import { useEffect } from "react";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ff17f76a0910d30be29baf43308e80be&language=en-US`
    )
      .then((response) => response.json)
      .then((data) => {
        setMovieDetails(data);
      });
  }, [id]);

  return (
    <>
      <Hero text={movieDetails.original.title} />
    </>
  );
};

export default MovieView;
