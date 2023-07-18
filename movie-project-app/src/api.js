import Homepage from "./components/Homepage/Homepage";

const API_KEY = `d62b9f08c7e24702fe7b7bedf129c3e4`;
const BASE_URL = `https://api.themoviedb.org/3`;

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
};
