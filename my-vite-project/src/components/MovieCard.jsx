import '../css/MovieCard.css';
import React, { useState } from 'react';
import { useMovieContext } from '../contexts/MovieContext';
import Popup from './Popup'; 

function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const { isToWatch, addToWatch, removeToWatch } = useMovieContext();
  const { rating } = useMovieContext();

  const favorite = isFavorite(movie.id);
  const toWatch = isToWatch(movie.id);

  function handleFavorite(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  function handleToWatch(e) {
    e.preventDefault();
    if (toWatch) removeToWatch(movie.id);
    else addToWatch(movie);
  }

  function handleRate(e) {
    e.preventDefault();
    setShowModal(true);
  }

  function showmode() {

    if (showModal === true) {
        return <Popup closeModal={() => setShowModal(false)} />
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={handleFavorite}
          >
            ❤
          </button>
          <button className="ToWatch-btn" onClick={handleToWatch}>
            ➡
          </button>
          <button onClick={handleRate}>Rate</button>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50px",
              fontSize: "15px"
            }}
          >
            {rating}
          </p>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-").slice(0, 2).join("-")}</p>
      </div>

      

      {showmode()}

    </div>
  );
}

export default MovieCard;
