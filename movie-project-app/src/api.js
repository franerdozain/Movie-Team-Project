


const API_KEY = 'api_key=d62b9f08c7e24702fe7b7bedf129c3e4';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const fetchUpcomingMovies = async (language) => {
  const upcoming_movie_API_URL = `${BASE_URL}/movie/upcoming?language=${language}&page=1&${API_KEY}`;
  return fetchMovies(upcoming_movie_API_URL);
};

export const fetchMainGalleryMovies = async (mainGallery, language) => {
  const main_gallery_API_URL = `${BASE_URL}/movie/${mainGallery}?language=${language}&page=1&${API_KEY}`;
  return fetchMovies(main_gallery_API_URL);
};

export const fetchFavoriteGenreMovies = async (favoriteGenre, language) => {
  const favorite_genre_API_URL = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=${language}&page=1&sort_by=popularity.desc&with_genres=${favoriteGenre}&${API_KEY}`;
  return fetchMovies(favorite_genre_API_URL);
};


export async function getMovieDetails(id) {
    const response = await fetch(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch movie details");
    }

    const data = await response.json();
    return data;
};

export async function getMovieImages(id) {
    const response = await fetch(
        `${BASE_URL}/movie/${id}/images?api_key=${API_KEY}&language=en-US&include_image_language=en`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch movie images");
    }
  
    const data = await response.json();
    return data.backdrops.map((backdrop) => backdrop.file_path);
};


export async function getGenres () {
    const response = await fetch(
        `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
        if (!response.ok) {
            throw new Error("Failed to fetch movie genres");
        }
        const data = await response.json()
    return data.genres;
}

export async function getSelectedGenre(genreId) {
    const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`)
        if (!response.ok) {
            throw new Error("Failed to fetch selected genre movies");
        }
        const data = await response.json()
    return data.results;
}

export async function getSortByWithGenre(genreId, sortBy) {
  let apiUrl = `${BASE_URL}/discover/movie?api_key=${API_KEY}&vote_count.gte=1000`;

  if (genreId !== null) {
    apiUrl += `&with_genres=${genreId}`;
  }

  if (sortBy !== null) {
    apiUrl += `&sort_by=${getSortByOption(sortBy)}`;
  }

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch selected movies");
  }

  const data = await response.json();
  return data.results;
}

export async function getMovieCredits(id) {
    const response = await fetch(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movie credits");
    }
  
    const data = await response.json();
    return data;
};

export async function getMovieReviews(id) {
    const response = await fetch(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
    );
  
    if (!response.ok) {
      throw new Error("Failed to fetch movie reviews");

    }
  
    const data = await response.json();
    return data.results;

  }
  
  function getSortByOption(sortBy) {
    const sortByOptions = {
      "Rating High to Low": "vote_average.desc",
      "Rating Low to High": "vote_average.asc",
      "Viewed Date New to Old": "release_date.desc",
      "Viewed Date Old to New": "release_date.asc",
    };
  
    return sortByOptions[sortBy];
  }
  
export async function getSearchedMovies(movie) {
  const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movie}`)
      if (!response.ok) {
          throw new Error("Failed to fetch searched movies");
      }
      const data = await response.json()
  return data.results;
}
