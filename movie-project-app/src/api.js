import Homepage from "./components/Homepage/Homepage";

export async function getMovieDetails(id) {
    const response = await fetch(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
  
    if (!response.ok) {
        throw new Error("Failed to fetch movie details");
    }
  
    const data = await response.json();
    return data;
}

export async function getMovieImages(id) {
    const response = await fetch(
        `${BASE_URL}/movie/${id}/images?api_key=${API_KEY}&language=en-US&include_image_language=en`
    );
  
    if (!response.ok) {
        throw new Error("Failed to fetch movie images");
    }
  
    const data = await response.json();
    return data.backdrops.map((backdrop) => backdrop.file_path);
  }