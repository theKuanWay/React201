import React from "react";
import Hero from "../Hero/Hero";

//API key = ff17f76a0910d30be29baf43308e80be
//search movie url = https://api.themoviedb.org/3/search/movie?api_key=ff17f76a0910d30be29baf43308e80be&language=en-US&query=star%20wars&page=1&include_adult=false

const SearchView = ({keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`
    console.log(searchResults, " are the search results")
    return (
    <>
    <Hero text={title}/>
    </>
    );
}

export default SearchView;