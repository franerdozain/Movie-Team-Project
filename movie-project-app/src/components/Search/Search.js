import SearchCard from "./SearchCard";
import Dropdown from "./Dropdown";
import GenresMenu from "./GenresMenu";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getGenres, getSelectedGenre, getSortByWithGenre, getSearchedMovies } from "../../api";

export default function Search() {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movies, setMovies] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filterDropdownTitle, setFilterDropdownTitle] = useState("Sort By");
  const [searchedMovie, setSearchedMovie] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await getGenres();
        setGenres(data);
      } catch (error) {
        console.error("Error fetching movie genres:", error);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchSelectedGenreMovies = async () => {
      if (selectedGenre && genres.length > 0) {
        const filteredGenres = genres.filter((genre) => genre.name === selectedGenre);
        if (filteredGenres.length > 0) {
          const selectedGenreId = filteredGenres[0].id;
          try {
            const movies = await getSelectedGenre(selectedGenreId);
            setMovies(movies);
          } catch (error) {
            console.error("Error fetching selected genre movies:", error);
          }
        }
      }
    };

    fetchSelectedGenreMovies();
  }, [selectedGenre]);

  useEffect(() => {
    const fetchTopRatedWithGenre = async () => {
      if (selectedGenre && genres.length > 0) {
        const filteredGenres = genres.filter((genre) => genre.name === selectedGenre);
        if (filteredGenres.length > 0) {
          const selectedGenreId = filteredGenres[0].id;
          try {
            const movies = await getSortByWithGenre(selectedGenreId, selectedFilter);
            setMovies(movies);
          } catch (error) {
            console.error("Error fetching selected genre movies:", error);
          }
        }
      } else {
        try {
          const movies = await getSortByWithGenre(null, selectedFilter); 
          setMovies(movies);
        } catch (error) {
          console.error("Error fetching selected genre movies:", error);
        }
      } 
    };
    
    fetchTopRatedWithGenre();
  }, [selectedGenre, selectedFilter]);
  
  const handleSearch = async (event) => {
    event.preventDefault()
    try {
      const movies = await getSearchedMovies(searchedMovie);
      setMovies(movies)  
      setSearchedMovie("")
    } catch (error) {
      console.error('Error fetching selected movies:', error);
    }
  };

  return (
    <>
      <form className="d-flex w-50 mx-auto mb-2" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchedMovie}
          onChange={(event) => setSearchedMovie(event.target.value)}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={(event) => handleSearch(event)}
        >
          Search
        </button>
        <Dropdown setSelectedFilter={setSelectedFilter} filterDropdownTitle={filterDropdownTitle} setFilterDropdownTitle={setFilterDropdownTitle} />
      </form>
      <div className="container text-center">
        <Row >
          <Col md={2} className="d-flex flex-column">
            <GenresMenu setSelectedGenre={setSelectedGenre} selectedGenre={selectedGenre} genres={genres} />
          </Col>
          <Col md={10}>
            <div className="row row-cols-4">
              {movies.map((movie) => (
                <SearchCard key={movie.id} movie={movie} />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
