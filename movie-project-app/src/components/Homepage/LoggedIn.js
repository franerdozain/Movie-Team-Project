import React from 'react';
import CardComponent from './CardComponent';



function LoggedIn(props) {
 
  return (
    <div>
        <div className='text-center text-lg-start'>
            MAIN GALLERY
        </div>
        <div className="container">
          <div className='row'>
            {props.movieItems.map((item) => (
              <CardComponent
                id={item.id}
                image={props.IMG_URL + item.poster_path}
                title={item.title}
                score={item.vote_average}
                overview={item.overview}
              />
            ))}
          </div>  
        </div>
        <div className='text-center text-lg-start'>
            MOVIES WE THINK YOU WILL LIKE
        </div>
        <div className="container text-center">
          <div className='row ml-100'>
            {props.favoriteGenreItems.map((item) => (
              <CardComponent
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


export default LoggedIn;
