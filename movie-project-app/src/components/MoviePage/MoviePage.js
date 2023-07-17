import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails, getMovieImages } from "../api";
import { IoPlay, IoVolumeHigh } from "react-icons/io5";

function MoviePage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        getMovieDetails(id)
            .then(movie => setMovie(movie))
            .catch((error) => console.error("Failed to fetch movie details", error));

        getMovieImages(id)
            .then(images => setImages(images))
            .catch((error) => console.error("Failed to fetch movie images", error));
    }, [id]);

    if (!movie || !images) return <div>Loading...</div>;

    return (
        <div>
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
                            <div>
                                <IoPlay />
                                <IoVolumeHigh />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{movie.title} ({new Date(movie.release_date).getFullYear()})</h5>
                            <p className="card-text">{movie.genres.map(genre => genre.name).join(', ')}</p>
                            <p className="card-text">{movie.runtime} minutes</p>
                            <p className="card-text">{movie.director}</p>
                            <p className="card-text">{movie.actors.slice(0, 6).join(', ')}</p>
                            <div>
                                <IoPlay />
                                <IoVolumeHigh />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Reviews</h5>
                            {movie.reviews.length > 0 ? (
                                <div>
                                    <p className="card-text">{movie.reviews[0].content}</p>
                                    <button className="btn btn-primary">Show All</button>
                                    <div>
                                        <IoPlay />
                                        <IoVolumeHigh />
                                    </div>
                                </div>
                            ) : (
                                <p>No reviews yet</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-columns">
                {movie.images.map((image, index) => (
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





