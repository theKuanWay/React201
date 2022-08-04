import React from "react";
import Hero from "../Hero/Hero";

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