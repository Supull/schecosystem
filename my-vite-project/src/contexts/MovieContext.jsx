import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {

    const [favorites, setFavorites] = useState([])
    const [ToWatch, setToWatch] = useState([])
    const [rating, setRating] = useState("m")
    const [movies, setMovies] = useState([]);

    

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))

    },[])

     useEffect(() => {
        const storedToWatch = localStorage.getItem("ToWatch")

        if (storedToWatch) setToWatch(JSON.parse(storedToWatch))

    },[])

    useEffect(() => {
        localStorage.setItem('favorites',JSON.stringify(favorites))
    }, [favorites])

    useEffect(() => {
        localStorage.setItem('ToWatch',JSON.stringify(ToWatch))
    }, [ToWatch])

    const addToWatch = (movie) => {

        setToWatch(prev => [...prev, movie])

    }
    
    const removeToWatch = (movieId) => {

        const updatedToWatch = []

        for (let i = 0; i < ToWatch.length; i++) {
            if (ToWatch[i].id !== movieId) {
                updatedToWatch.push(ToWatch[i])
            }
        }

        setToWatch(updatedToWatch)

    }

    const isToWatch =  (movieId) => {

        for (let i = 0; i < ToWatch.length; i++) {
            if (ToWatch[i].id === movieId) {
                return true
            }
        }

        return false

    }

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev,movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        ToWatch,
        addToWatch,
        removeToWatch,
        isToWatch,
        rating,
        setRating,
        movies,
        setMovies
    }

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}