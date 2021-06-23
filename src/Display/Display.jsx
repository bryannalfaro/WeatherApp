import React from 'react';
import './display.css'


const Display = ({city, humidity, temperature}) => {
    return(
    <div className="container">
        <div className="city">Ciudad: {city}</div>
        <div className="humidity">Humedad: {humidity}%</div>
        <div className="temp">Temperatura: {temperature}°C</div>
    </div>)

}

export default Display;