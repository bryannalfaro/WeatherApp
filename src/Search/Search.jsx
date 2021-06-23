import { React, useState } from "react";
import Display from '../Display/Display'
import './search.css'


const Search = () =>{
    const [citys, setCity] = useState('')
    const [humiditys, setHumidity] = useState('')
    const [temp, setTemp] = useState('')

    const ApiData = (val) =>{

        // eslint-disable-next-line no-restricted-globals
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&appid=e409e90475b3b569c06c30191d9fa161`)
        .then(function(resp) {return resp.json() })
        .then((data) => {
            setCity(data.name);
            setHumidity(data.main.humidity);
            setTemp(data.main.temp)})

        document.getElementById('input').value = ''
    }

    return(
        <div className="father">
            <input id='input' placeholder="Ingrese pais" />
            <button onClick={()=>ApiData(document.getElementById('input').value)}>Search</button>
            <Display city={citys} humidity={humiditys} temperature={temp}/>
        </div>
    )
}

export default Search