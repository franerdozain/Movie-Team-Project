
import React, { useEffect, useState } from 'react';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';
import { getUserFromLocalStorage } from '../../localStorageManager';
import { API_KEY, BASE_URL,IMG_URL,upcoming_movie_API_URL,main_gallery_API_URL,favorite_genre_API_URL } from '../../api';

function Homepage() {

  const [movieItems, setMovieItems] = useState([]);
  const [favoriteGenreItems, setFavoriteGenreItems] = useState([]);
  const user = getUserFromLocalStorage(); 
  const favoriteGenre = user.favoriteGenre;
  

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