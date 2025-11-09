

function Popup() {

    function handleratingsub(e) {
        
        window.close("/popup-page", "PopupWindow", "width=400,height=300");

    }

    return(
        <div>
            <form id="numberForm">
                <label for="numInput">Rating:</label>
                <input type="number" id="numInput" name="numInput" required/>
                <button onClick={handleratingsub} type="submit"> Submit</button>
            </form>
        </div>
    )

}

export default Popup;