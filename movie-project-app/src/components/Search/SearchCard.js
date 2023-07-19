import { FaSadCry } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function SearchCard ({movie}) {
    const regex = /[^\x00-\x7F]/;
    const navigate = useNavigate();

    const handleClick = (movie) => {
        const title = movie.original_title || movie.title;
        navigate(`/movie/${movie.id}`);
      };
    return (
        <div className="col mb-2" key={movie.id}>
        <div className="card h-100" role="button" onClick={() => handleClick(movie)}>
          {movie.backdrop_path || movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path || movie.poster_path}`}
              className="card-img-top"
              alt="..."
            />
          ) : (
            <div>
              <i className="noImg fa-solid fa-image fa-lg card-img-top"></i>
            </div>
          )}
          <div className="card-body">
            <h5 className="card-title">{movie.original_title || movie.title}</h5>
            {regex.test(movie.original_title || movie.title) && <h3>{movie.title || movie.original_title}</h3>}
            {movie.overview ? (
              <p className="card-text">{movie.overview}</p>
            ) : (
              <div>
                No Overview <FaSadCry />
              </div>
            )}
          </div>
        </div>
      </div>
    )
}