import { getUserFromLocalStorage, saveUserToLocalStorage } from '../../localStorageManager';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

function RegistrationStep3() {
    const navigate = useNavigate();
    const galleryStyles = ['popular', 'top_rated', 'upcoming'];
    const galleryStyleLabels = { popular: 'Most Popular', top_rated: 'Top Rated', upcoming: 'Upcoming' };

    const [registrationData, setRegistrationData] = useState({
        username: '',
        password: '',
        language: '',
        genres: [],
        galleryStyle: ''
    });

    const [selectedGalleryStyle, setSelectedGalleryStyle] = useState("");

    useEffect(() => {
        const userData = getUserFromLocalStorage();
        if (userData) {
            setRegistrationData(userData);
            setSelectedGalleryStyle(userData.galleryStyle || "");
        }
    }, []);

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
                        {galleryStyles.map((style) => (
                            <Button 
                                variant={selectedGalleryStyle === style ? "primary" : "light"} 
                                size="lg" 
                                className="mb-4" 
                                key={style} 
                                onClick={() => handleGalleryStyle(style)}
                            >
                                {galleryStyleLabels[style]}
                            </Button>
                        ))}
                        <div className="d-flex justify-content-around" style={{ width: "200px" }}>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="button" className="btn btn-primary" 
                                onClick={handleSkip}
                                >Skip</button>
                        </div>
                    </main>
                </div>
            </form>
        </div>
    );
};

export default RegistrationStep3;
