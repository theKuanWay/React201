import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import AboutView from './Components/About/About';
import SearchView from './Components/Search/SearchView';
import { Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';

function App() {

  const [searchResults, setSearchResults] = useState ({});
  const [searchText, setSearchText] = useState ('');

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
