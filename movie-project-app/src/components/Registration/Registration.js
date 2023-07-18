import React, { useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';

function Registration({ registrationData, setRegistrationData }) {
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const handleInputChange = (event) => {
        setRegistrationData({
            ...registrationData,
            [event.target.name]: event.target.value,
        });
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (registrationData.password === confirmPassword) {
            localStorage.setItem('registrationData', JSON.stringify(registrationData));
          // Proceed to next step or show success message
        } else {
          // Show error that passwords do not match
        }
    };

  return (
    <div className="container">
        <header className="text-center mt-5">
            <h1>Registration Page</h1>
            <h3>Dear User, please fill in the registration forms.</h3>
            <hr/>
        </header>
        <main className="my-5">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userInput">Username</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><FaUserAlt /></span>
                        </div>
                        <input 
                            type="login" 
                            className="form-control"
                            name="username"
                            id="userInput" 
                            placeholder="Enter Username"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><FaLock /></span>
                        </div>
                        <input 
                            type="password" 
                            className="form-control"
                            name="password"
                            value={registrationData.password}
                            id="passwordInput"
                            placeholder="Password"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordConfirmInput">Confirm Password</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><FaLock /></span>
                        </div>
                        <input 
                            type="password" 
                            className="form-control"
                            value={confirmPassword}
                            id="passwordConfirmInput" 
                            placeholder="Confirm Password"
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </main>
        <footer className="footer text-center my-5">
            <p>&copy; Hulix Movie App</p>
        </footer>
    </div>
  );
}

export default Registration;