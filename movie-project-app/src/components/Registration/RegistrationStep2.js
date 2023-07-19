import { getUserFromLocalStorage, saveUserToLocalStorage } from '../../localStorageManager';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationStep2() {
    const [registrationData, setRegistrationData] = useState({
        username: '',
        password: '',
        language: '',
        genres: []
    });

    const [selectedGenres, setSelectedGenres] = useState([]);
    const genreList = ['Romance', 'Crime', 'Comedy'];

    const handleLanguageChange = (event) => {
        setRegistrationData({
            ...registrationData,
            language: event.target.value,
        });
    }

    const handleGenreSelection = (genre) => {
        setSelectedGenres((prevSelectedGenres) => {
            if(prevSelectedGenres.includes(genre)) {
                return prevSelectedGenres.filter((g) => g !== genre);
            } else {
                return [...prevSelectedGenres, genre];
            }
        });
    }

    useEffect(() => {
        const userData = getUserFromLocalStorage();
        if (userData) {
            setRegistrationData(userData);
        }
    }, []);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedRegistrationData = {
            ...registrationData,
            genres: selectedGenres,
        };
        saveUserToLocalStorage(updatedRegistrationData);
        navigate('/RegistrationStep3');
    }

    const handleSkip = (event) => {
        event.preventDefault();
        navigate('/RegistrationStep3');
    }

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
                        {genreList.map((genre, index) => (
                            <button 
                                type="button" 
                                className={selectedGenres.includes(genre) ? "btn btn-primary m-2" : "btn btn-secondary m-2"}
                                key={index} 
                                onClick={() => handleGenreSelection(genre)}
                            >
                                {genre}
                            </button>
                        ))}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="submit" className="btn btn-primary" 
                    onClick={handleSkip}
                    >Skip</button>
            </form>
          </main>
          <footer className="footer text-center my-5">
            <p>&copy; 2023 Movie App</p>
          </footer>
        </div>
      );
    };
    
export default RegistrationStep2;