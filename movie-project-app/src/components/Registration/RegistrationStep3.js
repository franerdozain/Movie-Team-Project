import { getUserFromLocalStorage, saveUserToLocalStorage } from '../../localStorageManager';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';

function RegistrationStep3() {
    const navigate = useNavigate();
    const galleryStyles = ['Most popular', 'Top rated', 'Upcoming'];

    const initialRegistrationData = getUserFromLocalStorage() || {
        username: '',
        password: '',
        language: '',
        genres: [],
        galleryStyle: ''
    };

    const [registrationData, setRegistrationData] = useState(getUserFromLocalStorage() || {});
    const [selectedGalleryStyle, setSelectedGalleryStyle] = useState(registrationData.galleryStyle || "");

    const handleGalleryStyle = (style) => {
        setSelectedGalleryStyle(style);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedRegistrationData = {
            ...registrationData,
            galleryStyle: selectedGalleryStyle,
        };
        setRegistrationData(updatedRegistrationData);
        saveUserToLocalStorage(updatedRegistrationData);
        navigate('/RegistrationStep4');
    }

    const handleSkip = (event) => {
        event.preventDefault();
        navigate('/RegistrationStep4');
    }

    return (
        <div className="container">
            <header className="text-center mt-5">
                <h1>Registration Page</h1>
                <h3>Dear User, you can continue your registration or skip and provide rest of the data later.</h3>
                <hr/>
            </header>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="galleryStyleSelection">Please select your preferred gallery style for the home page:</label>
                    <main className="my-5 d-flex flex-column align-items-center">
                        {galleryStyles.map((style, index) => (
                            <Button 
                                variant={selectedGalleryStyle === style ? "primary" : "light"} 
                                size="lg" 
                                className="mb-4" 
                                key={index} 
                                onClick={() => handleGalleryStyle(style)}
                            >
                                {style}
                            </Button>
                        ))}
                        <div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="submit" className="btn btn-primary" 
                                onClick={handleSkip}
                                >Skip</button>
                        </div>
                    </main>
                </div>
            </form>
            <footer className="footer text-center my-5">
                <p>&copy; 2023 Movie App</p>
            </footer>
        </div>
    );
};
    
export default RegistrationStep3;