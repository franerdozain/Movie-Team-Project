import { getUserFromLocalStorage, saveUserToLocalStorage } from '../../localStorageManager';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGenres } from '../../api';

function RegistrationStep2() {
    const [registrationData, setRegistrationData] = useState({
        username: '',
        password: '',
        language: '',
        genres: []
    });

    const [selectedGenre, setSelectedGenre] = useState(null);
    const [genreList, setGenreList] = useState([]);

    const handleLanguageChange = (event) => {
        setRegistrationData({
            ...registrationData,
            language: event.target.value,
        });
    }

    const handleGenreSelection = (genre) => {
        setSelectedGenre(genre);
    }

    useEffect(() => {
        getGenres().then(setGenreList);

        const userData = getUserFromLocalStorage();
        if (userData) {
            setRegistrationData(prevState => ({
                ...prevState,
                username: userData.username || '',
                password: userData.password || '',
                language: userData.language || '',
                genres: userData.genres || []
            }));
        }
    }, []);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedRegistrationData = {
            ...registrationData,
            genres: selectedGenre ? [selectedGenre.id] : [],
        };
        saveUserToLocalStorage(updatedRegistrationData);
        navigate('/RegistrationStep3');
    };

    const handleSkip = (event) => {
        event.preventDefault();
        saveUserToLocalStorage(registrationData);
        navigate('/RegistrationStep3');
    };

    return (
        <div className="container">
            <header className="text-center mt-5">
                <h1>Registration Page</h1>
                <h3>Dear User, you can continue your registration or skip and provide rest of the data later.</h3>
                <hr/>
            </header>
            <main className="my-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="languageInput">Please select your preferred movie language:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="languageInput" 
                            placeholder="Start entering language" 
                            onChange={handleLanguageChange}
                            value={registrationData.language}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="genreSelection">Please select your favorite movie genres:</label>
                    <div id="genreSelection">
                        {genreList.map((genre) => (
                            <button 
                                type="button" 
                                className={selectedGenre && selectedGenre.id === genre.id ? "btn btn-primary m-2" : "btn btn-secondary m-2"}
                                key={genre.id}
                                onClick={() => handleGenreSelection(genre)}
                            >
                                {genre.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="d-flex justify-content-around" style={{ width: "200px" }}>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="button" className="btn btn-primary" 
                                onClick={handleSkip}
                                >Skip</button>
                </div>
            </form>
          </main>
        </div>
      );
    };
    
export default RegistrationStep2;