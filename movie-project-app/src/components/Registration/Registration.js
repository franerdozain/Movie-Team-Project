import React, { useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { getUsersFromLocalStorage, saveUserToUsersArray } from '../../localStorageManager';
import { useNavigate } from 'react-router-dom';

function Registration() {
    const [registrationData, setRegistrationData] = useState({
        username: '',
        password: '',
    });

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

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const usernameRegex = /^[a-zA-Z0-9]{3,10}$/;
        const passwordRegex = /^[a-zA-Z0-9_\-!\*]{5,10}$/;

        if (!usernameRegex.test(registrationData.username)) {
            alert('Name should have 3-10 characters and alphanumerics only.');
            return;
        }

        if (!passwordRegex.test(registrationData.password)) {
            alert('Password should have 5-10 characters and can contain only alphanumerics (or _, -, !, * sign).');
            return;
        }

        if (registrationData.password !== confirmPassword) {
            alert('Error: Passwords do not match.');
            return;
        }

        const users = getUsersFromLocalStorage();
        if (users.find(user => user.username === registrationData.username)) {
            alert('Error: Username already exists.');
            return;
        }

        saveUserToUsersArray(registrationData);
        navigate('/RegistrationStep2');
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
    </div>
  );
}

export default Registration;