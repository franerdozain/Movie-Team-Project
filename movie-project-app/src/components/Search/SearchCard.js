import { FaSadCry } from 'react-icons/fa';

export default function SearchCard ({item}) {
    const regex = /[^\x00-\x7F]/;

    const handleClick = (item) => {
        const title = item.original_title || item.title;
        navigate(`/title/${title}`);
      };
    return (
        <div className="col mb-2" key={item.id}>
        <div className="card h-100" role="button" onClick={() => handleClick(item)}>
          {item.backdrop_path || item.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path || item.poster_path}`}
              className="card-img-top"
              alt="..."
            />
          ) : (
            <div>
              <i className="noImg fa-solid fa-image fa-lg card-img-top"></i>
            </div>
          )}
          <div className="card-body">
            <h5 className="card-title">{item.original_title || item.title}</h5>
            {regex.test(item.original_title || item.title) && <h3>{item.title || item.original_title}</h3>}
            {item.overview ? (
              <p className="card-text">{item.overview}</p>
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