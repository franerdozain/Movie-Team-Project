import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';


function CardComponent(props) {
 
  return (
    <Link to={`/movie/${props.id}`}>
      <div className="text-center m-2 p-2 card" style={{ cursor: 'pointer'}}>
        {/* <h3>{props.title}</h3> */}
        <img className="border m-2 border-dark rounded" src={props.image} alt={`${props.title} Movie Poster`} />
        {/* <div>Score: {props.score}</div> */}
        {/* <div>Overview: {props.overview}</div> */}
      </div>
    </Link>
  );
}


export default CardComponent;
