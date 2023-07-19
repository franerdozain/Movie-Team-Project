import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getMovieDetails, getMovieImages, getMovieCredits, getMovieReviews } from "../../api";
import { IoPlay, IoVolumeHigh } from "react-icons/io5";
import { getUserFromLocalStorage } from '../../localStorageManager';


function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [images, setImages] = useState([]);
  const [director, setDirector] = useState("");
  const [actors, setActors] = useState([]);
  const [reviews, setReviews] = useState([]);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    Promise.all([
      getMovieDetails(id),
      getMovieImages(id),
      getMovieCredits(id),
      getMovieReviews(id),
    ]).then(([movie, images, credits, reviews]) => {
      setMovie(movie);
      setImages(images);

      const director = credits.crew.find(crew => crew.job === "Director")?.name;
      setDirector(director);
      const actors = credits.cast.slice(0, 6).map(actor => actor.name);
      setActors(actors);

      setReviews(reviews);
    }).catch((error) => {
      console.error("Failed to fetch movie data", error);
    });
  }, [id]);
  
  if (!movie || !images) return <div>Loading...</div>;

  const handleVoiceover = (text) => {
    if (typeof window.responsiveVoice === 'undefined') {
        console.error("ResponsiveVoice is not loaded yet.");
        return;
    }
    if (isPlaying) {
        window.responsiveVoice.cancel();
        setIsPlaying(false);
    } else {
        let user = getUserFromLocalStorage();
        const voiceStyle = user && user.voiceStyle ? user.voiceStyle : 'US English Female';
        window.responsiveVoice.speak(text, voiceStyle, { onstart: () => setIsPlaying(true), onend: () => setIsPlaying(false) });
    }
};

    return (
        <div className="container mt-3 mb-3">
            <h2>{movie.title}</h2>
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={`${movie.title} poster`} 
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{movie.title} ({new Date(movie.release_date).getFullYear()})</h5>
                            <p className="card-text">{movie.genres ? movie.genres.map(genre => genre.name).join(', ') : 'No Genres'}</p>
                            <p className="card-text">Movie duration: {movie.runtime} minutes</p>
                            <p className="card-text">Director: {director}</p>
                            <p className="card-text">Main cast: {actors.join(', ')}</p>
                            <div>
                                <IoPlay onClick={() => handleVoiceover(movie.overview)} />
                                <IoVolumeHigh />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Reviews</h5>
                            {reviews.length > 0 ? (
                                <div>
                                    <p className="card-text">{reviews[0]?.content}</p>
                                    <button className="btn btn-primary">Show All</button>
                                </div>
                            ) : (
                                <p>No reviews yet</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-columns">
                {images.map((image, index) => (
                    <div className="card" key={index}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${image}`} 
                            alt={`Movie image ${index + 1}`} 
                            className="card-img-top"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviePage;
