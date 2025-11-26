import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home';
import Favorite from './pages/favourite';
import ToWatch from './pages/ToWatch.jsx';
import Popup from './components/Popup.jsx';
import supabase from './supabase-client.js';

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/ToWatch" element={<ToWatch />} />
          <Route path="/popup-page" element={<Popup />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
