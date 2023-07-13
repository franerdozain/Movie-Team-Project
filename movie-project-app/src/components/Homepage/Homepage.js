
import React, { useEffect, useState } from 'react';
import CardComponent from './CardComponent';


function Homepage() {

  const [movieItems, setMovieItems] = useState([]);
  const IMG_URL = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    const API_URL = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=d62b9f08c7e24702fe7b7bedf129c3e4`


    const fetchMovies = async () => {
      try {
        const url = API_URL;


        const response = await fetch(url);
        const data = await response.json();
        setMovieItems(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };



    fetchMovies();
  }, []);


     



  return (
    <>
        <div>
            COMING SOON
        </div>
        <div className="container border">
          <div className='row'>
            {movieItems.map((item) => (
              <CardComponent
                id={item.id}
                image={IMG_URL + item.poster_path}
                title={item.title}
                score={item.vote_average}
                overview={item.overview}
                type={"movie"}
              />
            ))}
          </div>  
        </div>

    </>
   
  );
}


export default Homepage;