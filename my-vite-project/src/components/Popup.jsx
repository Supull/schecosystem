import { useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";

function Popup() {

    const [inputValue, setinputValue] = useState("");
    const { setRating } = useMovieContext();

    function handleratingsub(e) {
        
        e.preventDefault();

        setRating(inputValue);
        
        window.close();

    }

    return(
        <div>
            <form id="numberForm">
                <label htmlFor="numInput">Rating:</label>
                <input type="number" 
                    id="numInput" 
                    name="numInput" 
                    value={inputValue} 
                    onChange={(e) => setinputValue(e.target.value)} 
                    required
                />
                <button type="submit" onClick={handleratingsub}> Submit</button>
            </form>
        </div>
    )

}

export default Popup;