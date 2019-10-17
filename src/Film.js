import React from 'react';
import './Film.css';

function Film(props) {
    return(
        
        <div className="film">
            <h4>{props.name}</h4>
            <img src={props.img}></img>
            <p>{props.date}</p>
        </div>
    );
}
export default Film;
