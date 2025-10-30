import { useState, useEffect } from "react";

function Todolist1() {

    const [list,setList] = useState([]);

    function handleadd() {

        const newitem = document.getElementById("myInput").value;

        setList([...list,newitem])

    }

    function handleremove() {
        const newlist = list.slice(index, 1);
        setList(newlist);
    }


    return(
        <div> 

            <p>New item</p>
            <input type="text" id="myInput" placeholder="Enter text here" /> <br/>
            <button id="addButton" onClick={handleadd}>addddd</button>
            
            


             <h1>TODO List</h1>
             <ul>
                {list.map((item, index) => (
                  <li key={index}>{item}<button onClick={handleremove}>remove</button></li>
              ))}
             </ul>


        </div>
    )
}

export default Todolist1;