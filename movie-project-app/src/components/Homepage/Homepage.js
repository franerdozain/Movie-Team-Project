
import React, { useEffect, useState } from 'react';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';
import { getUserFromLocalStorage } from '../../localStorageManager';

function Homepage() {

  const [movieItems, setMovieItems] = useState([]);
  const [favoriteGenreItems, setFavoriteGenreItems] = useState([]);
  const user = getUserFromLocalStorage(); 
  
  const IMG_URL = 'https://image.tmdb.org/t/p/w200';
  const API_KEY = `api_key=d62b9f08c7e24702fe7b7bedf129c3e4`;
  const BASE_URL = `https://api.themoviedb.org/3`;
  const favoriteGenre = `18`
  const upcoming_movie_API_URL = `${BASE_URL}/movie/upcoming?language=en-US&page=1&${API_KEY}`;
  const main_gallery_API_URL = `${BASE_URL}/movie/popular?language=en-US&page=1&${API_KEY}`;
  const favorite_genre_API_URL = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${favoriteGenre}&${API_KEY}`

  useEffect(() => {
    const API_URL = !user ? upcoming_movie_API_URL : main_gallery_API_URL;
  
    const fetchMovies = async (url, setter) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setter(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
  
    fetchMovies(API_URL, setMovieItems);

    if (user) {
      fetchMovies(favorite_genre_API_URL, setFavoriteGenreItems);
    }


  }, [user]);


  return (
    <>

      

      {!user ? <LoggedOut
      movieItems = {movieItems}
      IMG_URL ={IMG_URL}
      />: <LoggedIn
      movieItems = {movieItems}
      IMG_URL ={IMG_URL}
      favoriteGenreItems = {favoriteGenreItems}
      />
        }
       
       
    </>
   
  );
}


export default Homepage;