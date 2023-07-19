import { getUserFromLocalStorage, saveUserToLocalStorage, saveUserToUsersArray } from '../../localStorageManager';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function RegistrationStep4() {
    const navigate = useNavigate();
    const voiceStyles = ['Spanish Female', 'French Male', 'Italian Female'];

    const initialRegistrationData = getUserFromLocalStorage() || {
      username: '',
      password: '',
      language: '',
      genres: [],
      galleryStyle: '',
      voiceStyle: ''
    };

    const [registrationData, setRegistrationData] = useState(getUserFromLocalStorage() || {});
    const [selectedVoiceStyle, setSelectedVoiceStyle] = useState(registrationData.voiceStyle || "");

    const handleVoiceStyle = (style) => {
        setSelectedVoiceStyle(style);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      const updatedRegistrationData = {
          ...registrationData,
          voiceStyle: selectedVoiceStyle,
      };
      setRegistrationData(updatedRegistrationData);
      saveUserToLocalStorage(updatedRegistrationData);
      saveUserToUsersArray(updatedRegistrationData);
      navigate('/Login');
    }

    const handleSkip = (event) => {
        event.preventDefault();
        saveUserToUsersArray(registrationData);
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
                  <label htmlFor="voiceStyleSelection">Please select your preferred voice style for text vocalization:</label>
                  <main className="my-5 d-flex flex-column align-items-center">
                      {voiceStyles.map((style, index) => (
                          <Button 
                              variant={selectedVoiceStyle === style ? "primary" : "light"} 
                              size="lg" 
                              className="mb-4" 
                              key={index} 
                              onClick={() => handleVoiceStyle(style)}
                          >
                              {style}
                          </Button>
                      ))}
                      <div>
                          <button type="submit" className="btn btn-primary">Submit</button>
                          <button type="button" className="btn btn-secondary" onClick={handleSkip}>Skip</button>
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

export default RegistrationStep4;