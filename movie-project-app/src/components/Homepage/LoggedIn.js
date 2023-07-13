import React from 'react';
import CardComponent from './CardComponent';



function LoggedIn(props) {
 
  return (
    <div>
        <div>
            Popular Movies 
        </div>
        <div className="container col-md-12 ">
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
        <div>
            MOVIES WE THINK YOU WILL LIKE
        </div>
        <div className="container col-md-12 border">
          <div className='row border'>
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
