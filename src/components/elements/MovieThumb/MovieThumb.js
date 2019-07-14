import React from 'react';
import './MovieThumb.js';
import {Link} from 'react-router-dom';

const MovieThumb = (props) => {
    return (
        <div className="rmdb-moviethumb">
        {props.clickable ? 
        <Link to={{pathname: `/${props.movieId}`, movieName: `${props.movieName}`}}>
            <img src={props.image} alt="movieThumb" />
        </Link>
        :
        <img src={props.image} alt="movieThumb" />
        }
        </div>
    )
}

export default MovieThumb;