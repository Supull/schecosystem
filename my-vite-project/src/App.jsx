import { useState } from 'react'
import './css/App.css';
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Favorite from './pages/favourite'
import NavBar from './components/NavBar.jsx';
import { MovieProvider } from './contexts/MovieContext.jsx';
import ToWatch from './pages/ToWatch.jsx';
import Popup from './components/Popup.jsx';



function App() {
  

  return (
    <MovieProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorite/>}/>
          <Route path="/ToWatch" element={<ToWatch/>}/>
          <Route path="/popup-page" element={<Popup/>}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App;
