import { Button } from 'react-bootstrap';

function RegistrationStep4({ registrationData, setRegistrationData }) {
    const voiceStyles = ['Spanish Female', 'French Male', 'Italian Female'];
    const [selectedVoiceStyle, setSelectedVoiceStyle] = useState(registrationData.voiceStyle);

    const handleVoiceStyle = (style) => {
        setSelectedVoiceStyle(style);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setRegistrationData({
            ...registrationData,
            voiceStyle: selectedVoiceStyle,
        });
        localStorage.setItem('registrationData', JSON.stringify(registrationData));
        // Proceed to next step or show success message
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