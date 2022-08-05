import React from "react";
import Hero from "../Hero/Hero";

//API key = ff17f76a0910d30be29baf43308e80be
//search movie url = https://api.themoviedb.org/3/search/movie?api_key=ff17f76a0910d30be29baf43308e80be&language=en-US&query=star%20wars&page=1&include_adult=false

const MovieCard = ({movie}) => {
    return (
        <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}

const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`

    const resultsHtml = searchResults.map((obj, i) => {
        return <div key={i}>{obj.original_title}</div>
    }); 

    return (
    <>
    <Hero text={title}/>
    {resultsHtml}
    </>
    );
}

export default SearchView;