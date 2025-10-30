function MovieCard({movie}) {

    function handlefavourite() {


    }

    return (
        <div className="moviecard">
            <div className="poster">
                <img src = {movie.url} alt = {movie.title}/>
                <div className="movie-overlay">
                    <button className="favourite-btn" onClick={handlefavourite}> ❤ </button>
                </div>

            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>

        </div>
    )
}

export default MovieCard;