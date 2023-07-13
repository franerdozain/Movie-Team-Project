import { Button } from 'react-bootstrap';

function RegistrationStep3() {
    const handleGalleryStyle = (style) => { }

    return (
        <div className="container">
            <header className="text-center mt-5">
                <h1>Registration Page</h1>
                <h3>Dear User, you can continue your registration or skip and provide rest of the data later.</h3>
                <hr/>
            </header>
            <div className="form-group">
                <label htmlFor="genreSelection">Please select your preferred gallery style for the home page:</label>
                <main className="my-5 d-flex flex-column align-items-center">
                    <Button variant="light" size="lg" className="mb-4" onClick={() => handleGalleryStyle('Most popular')}>Most popular</Button>
                    <Button variant="light" size="lg" className="mb-4" onClick={() => handleGalleryStyle('Top rated')}>Top rated</Button>
                    <Button variant="light" size="lg" className="mb-4" onClick={() => handleGalleryStyle('Upcoming')}>Upcoming</Button>
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="submit" className="btn btn-primary" 
                            //onClick={moveNext}
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
    
export default RegistrationStep3;