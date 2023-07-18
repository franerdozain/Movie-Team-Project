import React, { useEffect, useState } from 'react';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';
import { getUserFromLocalStorage } from '../../localStorageManager';
import { fetchUpcomingMovies, fetchMainGalleryMovies, fetchFavoriteGenreMovies } from '../../api';



function Homepage() {
  const [movieItems, setMovieItems] = useState([]);
  const [favoriteGenreItems, setFavoriteGenreItems] = useState([]);
  const user = getUserFromLocalStorage();

  const favoriteGenre = user?.favoriteGenre || '18';
  const mainGallery = user?.mainGallery || 'popular';
  const language = user?.language || 'US-en';

  const IMG_URL = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    const fetchMoviesBasedOnUser = async () => {
      let movies;
      if (!user) {
        movies = await fetchUpcomingMovies(language);
      } else {
        movies = await fetchMainGalleryMovies(mainGallery, language);
        const favoriteMovies = await fetchFavoriteGenreMovies(favoriteGenre, language);
        setFavoriteGenreItems(favoriteMovies);
      }
      setMovieItems(movies);
    };

    fetchMoviesBasedOnUser();
  }, [user]);

  return (
    <>
      {!user ? (
        <LoggedOut 
        movieItems={movieItems} 
        IMG_URL={IMG_URL} 
      />
      ) : (
        <LoggedIn 
          movieItems={movieItems} 
          IMG_URL={IMG_URL} 
          favoriteGenreItems={favoriteGenreItems}
        />
      )}
    </>
  );
}

export default Homepage;
