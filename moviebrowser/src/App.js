import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import AboutView from './Components/About/About';
import SearchView from './Components/Search/SearchView';
import { Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';

function App() {

  const [searchResults, setSearchResults] = useState ([]);
  const [searchText, setSearchText] = useState ('');

  useEffect (()=> {
      if(searchText) {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=ff17f76a0910d30be29baf43308e80be&language=en-US&query=${searchText}&page=1&include_adult=false
      `)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSearchResults(data.results)
      })
    }  
  }, [searchText])

  return (
    <div>
      <NavBar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutView/>} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>} />
      </Routes>
    </div>
  );
}

export default App;
