import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Result = styled.div`
    margin-top: 3rem;
    background-color: #FFF;
    padding: 3rem;
    -webkit-box-shadow: 0px 2px 9px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 2px 9px -2px rgba(0,0,0,0.75);
    box-shadow: 0px 2px 5px -2px rgba(0,0,0,0.75);
    cursor: pointer;
    text-align: center;
`;

const Temp = styled.p`
    font-size: 6rem;
    margin-top: -3rem;
`;

const Parrafo = styled.p`
    padding-bottom: 10px;
    border-bottom: 1px solid #EDEDED;
`;

const Weather = ({ result }) => {

    // Extract values from API
    const { name, main, sys, weather, wind, visibility, timezone } = result;

    // Kelvin degrees
    const kelvin = 273.15;

    if(!name) return null;

    return ( 
        <Result>
            <h3>{name}, {sys.country}</h3>
            <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="Imagen" />
            <Temp>{Math.round(main.temp - kelvin)} &#176;C</Temp>
                <Parrafo> 
                    <img src="assets/img/warming.png" alt="Sensación Térmica" />
                    &nbsp; <b>Sensación Térmica</b>: {(main.feels_like - kelvin).toFixed(1)} &#176;C
                </Parrafo>
                <Parrafo>
                    <img src="assets/img/humidity.png" alt="Humedad" />
                    &nbsp; <b>Humedad</b>: {main.humidity}%
                </Parrafo>
                <Parrafo>
                    <img src="assets/img/wind.png" alt="Viento" />
                    &nbsp; <b>Viento</b>: a {Math.round(wind.speed * 3.6)} km/h
                </Parrafo>
                <Parrafo>
                    <img src="assets/img/visibility.png" alt="Visibilidad" />
                    &nbsp; <b>Visibilidad</b>: a {visibility / 1000} km/h
                </Parrafo>
        </Result>
     );
}

Weather.propTypes = {
    result: PropTypes.object.isRequired
}
 
export default Weather;