import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { getUserFromLocalStorage, saveUserToUsersArray, clearUserFromLocalStorage } from '../../localStorageManager';

function RegistrationStep4() {
    const navigate = useNavigate();
    const [voices, setVoices] = useState([]);
    const [registrationData, setRegistrationData] = useState(getUserFromLocalStorage() || {});
    const [selectedVoice, setSelectedVoice] = useState(registrationData.voiceStyle || "");

    useEffect(() => {
        if (window.responsiveVoice) {
            const availableVoices = window.responsiveVoice.getVoices().slice(0, 10);
            setVoices(availableVoices);
        }
    }, []);

    const handleVoiceSelection = (voice) => {
        setSelectedVoice(voice);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedRegistrationData = {
            ...registrationData,
            voiceStyle: selectedVoice,
        };
        setRegistrationData(updatedRegistrationData);
        saveUserToUsersArray(updatedRegistrationData);
        clearUserFromLocalStorage();
        navigate('/Login');
    }
    
    const handleSkip = (event) => {
        event.preventDefault();
        saveUserToUsersArray(registrationData);
        clearUserFromLocalStorage();
        navigate('/Login');
    }

    return (
        <div className="container">
            <header className="text-center mt-5">
                <h1>Registration Page</h1>
                <h3>Dear User, you can end your registration or skip and provide rest of the data later.</h3>
                <hr/>
            </header>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="voiceSelection">Please select your preferred voice for text vocalization:</label>
                    <main className="my-5 d-flex flex-column align-items-center">
                        {voices.map((voice, index) => (
                            <Button 
                                variant={selectedVoice === voice ? "primary" : "light"} 
                                size="lg" 
                                className="mb-4" 
                                key={index} 
                                onClick={() => handleVoiceSelection(voice)}
                            >
                                {voice.name}
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

export default RegistrationStep4;
