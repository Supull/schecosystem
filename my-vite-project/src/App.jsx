import { useState } from 'react'
import './css/App.css';
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Favorite from './pages/favourite'
import NavBar from './components/NavBar.jsx';



function App() {
  

  return (
    <div>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorite/>}/>
        </Routes>
      </main>
    </div>

    
    
  )
}

export default App;
