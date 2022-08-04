import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import AboutView from './Components/About/About';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutView/>} />
      </Routes>
    </div>
  );
}

export default App;
