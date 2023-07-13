import React, { useState, useEffect } from 'react';

function RegistrationStep2() {
    const [genres, setGenres] = useState([]);
    const [language, setLanguage] = useState('');

    useEffect(() => {
        fetch(api)
    }, []);

    const handleGenreSelection = (genre) => {
        return
    }

    return (
        <div className="container">
            <header className="text-center mt-5">
                <h1>Registration Page</h1>
                <h3>Dear User, you can continue your registration or skip and provide rest of the data later.</h3>
                <hr/>
            </header>
            <main className="my-5">
                <form>
                    <div className="form-group">
                        <label htmlFor="languageInput">Please select your preferred movie language:</label>
                        <input type="text" className="form-control" id="languageInput" placeholder="Start entering language" onChange={setLanguage}/>
                </div>
                <div className="form-group">
                    <label htmlFor="genreSelection">Please select your favorite movie genres:</label>
                    <div id="genreSelection">
                        <button type="button" className="btn btn-primary m-2" key={genre.id} onClick={handleGenreSelection}>
                        {Romance}
                        {Crime}
                        {Comdey}
                        </button>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="submit" className="btn btn-primary" onClick={moveNext}>Skip</button>
            </form>
          </main>
          <footer className="footer text-center my-5">
            <p>&copy; 2023 Movie App</p>
          </footer>
        </div>
      );
    };
    
export default RegistrationStep2;