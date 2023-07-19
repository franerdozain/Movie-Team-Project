import React from 'react';
import CardComponent from './CardComponent';



function LoggedOut(props) {
 
  return (
    <div>
        <div className='text-center text-lg-start'>
            COMING SOON
        </div>
        <div className="container col-md-12 border">
          <div className='row'>
            {props.movieItems.map((item) => (
              <CardComponent
                key={item.id}
                id={item.id}
                image={props.IMG_URL + item.poster_path}
                title={item.title}
                score={item.vote_average}
                overview={item.overview}
                
              />
            ))}
          </div>  
        </div>
    </div>
  );
}


export default LoggedOut;
