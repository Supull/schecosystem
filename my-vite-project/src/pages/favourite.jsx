import '../css/Favorites.css';
import MovieCard from '../components/MovieCard';
import { useMovieContext } from '../contexts/MovieContext';

function Favorite() {

    const {favorites} = useMovieContext()

    if (favorites) {
        return (
        <div className="favorites">
            <h2>Your Favorites</h2>
            <div className="movies-grid">
            {favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
            </div>
        </div>
        );
    } else {

        return (
            <div className="favorites-empty">
                <h2>No To Watch Movies Yet</h2>
                <p>Start adding movies to your To Watch and they will appear here!</p>
            </div>
        );

    }


}

export default Favorite;