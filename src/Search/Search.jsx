import { React } from "react";

import './search.css'


const Search = () =>{

    const ApiData = (val) =>{
        console.log('va',val)

        // eslint-disable-next-line no-restricted-globals
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&appid=e409e90475b3b569c06c30191d9fa161`)
        .then(function(resp) {return resp.json() }).then((data) => {console.log(data)})
    }

    return(
        <div className="father">
            <input id='input' placeholder="Ingrese pais" />
            <button onClick={()=>ApiData(document.getElementById('input').value)}>Search</button>
        </div>
    )
}

export default Search