import React from 'react';
import './display.css'


const Display = ({ city, humidity, temperature, icon, desc, country }) => {
    if(!city) return null;
    return (
        <div className="container">
            <div className="name">
                <div className="city">City: {city}, {country}</div>


<img src={"https://www.countryflags.io/"+country+"/flat/48.png"} alt="flag" />



            </div>

            <div className="humidity">Humidity: {humidity}%</div>
            <div className="temp">Temperature: {temperature}°C</div>
            <div className="desc">
                <div className="temp">Description: {desc}</div>
                <img src={'http://openweathermap.org/img/wn/' + icon + '@2x.png'} alt="" />
            </div>

        </div>)

}

export default Display;