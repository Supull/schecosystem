import '../css/Favorites.css';
import MovieCard from '../components/MovieCard';
import { useMovieContext } from '../contexts/MovieContext';


function ToWatch() {

    const {ToWatch} = useMovieContext()

    if (ToWatch) {
        return (

        <div className="favorites">
            <h2>Your To Watch List</h2>
            <div className="movies-grid">
            {ToWatch.map((movie) => (
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

export default ToWatch;