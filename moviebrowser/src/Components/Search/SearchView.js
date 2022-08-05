import React from "react";
import Hero from "../Hero/Hero";

//API key = ff17f76a0910d30be29baf43308e80be
//search movie url = https://api.themoviedb.org/3/search/movie?api_key=ff17f76a0910d30be29baf43308e80be&language=en-US&query=star%20wars&page=1&include_adult=false

const MovieCard = ({movie}) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
        <div className="card">
        <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        <a href="#" className="btn btn-primary">Show details</a>
        </div>
        </div>
        </div> 
  )
}

const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`

    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    }); 

    return (
    <>
    <Hero text={title}/>
    {resultsHtml &&
    <div className="container">
        <div className="row">
            {resultsHtml}
        </div>
    </div>
    }
    </>
    );
}

export default SearchView;