import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies } from "../services/api";
import { getPopularMovies } from "../services/api";
import { useMovieContext } from "../contexts/MovieContext";
import '../css/Home.css';

function Home() {

    const [searchQuery,setsearchQuery] = useState("");
    const { movies, setMovies } = useMovieContext()
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()

                const moviesWithRating = popularMovies.map(movie => ({
                ...movie,          
                ratings: "-/10"     
                }));
                setMovies(moviesWithRating)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()

    }, []) 

    const handlesubmit = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            const moviesWithRating = searchResults.map(movie => ({
                ...movie,          
                ratings: "-/10"     
            }));
            setMovies(moviesWithRating)
            setError(null)

        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }

        setsearchQuery("")

    };

    return(

        <div className="home">
            
            <form onSubmit={handlesubmit} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies.." 
                    className="search-input" 
                    value={searchQuery}
                    onChange={(e) => setsearchQuery(e.target.value)}
                    
                />
                <button type="submit" className="search-button">search</button>
            </form>

                {error && <div className="eroor-message">{error}</div>}


            {loading ? (
                <div className="loading">Loading..</div>
            ) : (
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
            )}
        </div>
    )
}

export default Home;