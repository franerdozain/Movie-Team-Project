import { Button } from 'react-bootstrap';

function RegistrationStep4() {
  const handleVoiceStyle = (style) => { };

  const handleSubmit = () => { };

  const handleSkip = () => { };

  return (
    <div className="container">
      <header className="text-center mt-5">
        <h1>Registration Page</h1>
        <h3>Dear User, you can end your registration or skip and provide rest of the data later.</h3>
        <hr/>
      </header>
      <div className="form-group">
        <label htmlFor="voiceSelection">Please select your preferred voice style for text vocalization:</label>
        <main className="my-5 d-flex flex-column align-items-center">
          <Button variant="light" size="lg" className="mb-4" onClick={() => handleVoiceStyle('Spanish Female')}>Spanish Female</Button>
          <Button variant="light" size="lg" className="mb-4" onClick={() => handleVoiceStyle('French Male')}>French Male</Button>
          <Button variant="light" size="lg" className="mb-4" onClick={() => handleVoiceStyle('Italian Female')}>Italian Female</Button>
          <div>
            <button type="submit" className="btn btn-primary" 
              //</div>onClick={handleSubmit}
              >Submit</button>
            <button type="button" className="btn btn-secondary" 
              //onClick={handleSkip}
              >Skip</button>
          </div>
        </main>
      </div>
      <footer className="footer text-center my-5">
        <p>&copy; 2023 Movie App</p>
      </footer>
    </div>
  );
};

export default RegistrationStep4;