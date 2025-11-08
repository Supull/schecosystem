import '../css/MovieCard.css';
import React from 'react';
import { useState } from 'react';
import { useMovieContext } from '../contexts/MovieContext';

function MovieCard({movie}) {

    const [popstatus, setpopstatus] = useState(false)
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const {isToWatch, addToWatch, removeToWatch} = useMovieContext()


    const favorite = isFavorite(movie.id)
    const ToWatchv = isToWatch(movie.id)

    function handlefavourite(e) {

        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)

    }

    function handleToWatch(e) {
        e.preventDefault()
        if (ToWatchv) {
            removeToWatch(movie.id)
        } else {
            addToWatch(movie)
        }
    
    }

    function handlerate(e) {
        e.preventDefault
        window.open("/popup-page", "PopupWindow", "width=400,height=300");


    }


    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt = {movie.title}/>
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={handlefavourite}> ❤ </button>
                    <button className = "ToWatch-btn" onClick={handleToWatch}>➡</button>
                    <button onClick={handlerate}>Rate</button>
                </div>

            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-").slice(0, 2).join("-")}</p>
            </div>

        </div>
    )
}

export default MovieCard;