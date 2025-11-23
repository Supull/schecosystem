import { useState } from "react";
import { createPortal } from "react-dom";
import { useMovieContext } from "../contexts/MovieContext";

function Popup({ closeModal, movie }) {
  const [inputValue, setInputValue] = useState("");
  const { rating, setRating } = useMovieContext();
  const { movies, setMovies } = useMovieContext()

  function handleSubmit(e) {
    e.preventDefault();
    setRating(inputValue);
    setMovies(
        
        function movieratei(){

            for (let i = 0; i < movies.length; i++) {
                if (movies[i].id === movie.id) {
                    movies[i].ratings = inputValue
                }

            }
         return movies

    })

    closeModal();
  }

  return createPortal(
    <div style={styles.backdrop} onClick={closeModal}>
      <div
        style={styles.modal}
        onClick={(e) => e.stopPropagation()} 
      >
        <h3>Rate Movie</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Submit</button>
          <button type="button" onClick={closeModal} style={styles.close}>Close</button>
        </form>
      </div>
    </div>,
    document.body 
  );
}

const styles = {
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10000
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center"
  },
  input: {
    width: "80%",
    padding: "8px",
    marginTop: "10px"
  },
  button: {
    width: "80%",
    padding: "10px",
    marginTop: "10px",
    background: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  close: {
    width: "80%",
    padding: "10px",
    marginTop: "10px",
    background: "gray",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Popup;
