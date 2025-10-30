import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {

    const [searchQuery,setsearchQuery] = useState("")

    const movies = [{id: 1, title: "John wick", release_date: "2022"},
                    {id: 2, title: "Tensura", release_date: "2032"},
                    {id: 3, title: "Overlord", release_date: "2021"}
    ]

    const handlesubmit = () => {

    }

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
            <div className="movies-grind">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>

        </div>
    )
}

export default Home;