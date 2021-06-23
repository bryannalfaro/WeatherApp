import React from 'react';
import './display.css'


const Display = ({city, humidity, temperature}) => {
    return(
    <div className="container">
        <div className="city">City: {city}</div>
        <div className="humidity">Humidity: {humidity}%</div>
        <div className="temp">Temperature: {temperature}°C</div>
    </div>)

}

export default Display;