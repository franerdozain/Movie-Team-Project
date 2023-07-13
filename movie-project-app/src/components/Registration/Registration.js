import React from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';


function Registration() {
    
  return (
    <div className="container">
        <header className="text-center mt-5">
            <h1>Registration Page</h1>
            <h3>Dear User, please fill in the registration forms.</h3>
            <hr/>
        </header>
        <main className="my-5">
            <form>
                <div className="form-group">
                    <label htmlFor="emailInput">Username</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><FaUserAlt /></span>
                        </div>
                        <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter Username"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><FaLock /></span>
                        </div>
                        <input type="password" className="form-control" id="passwordInput" placeholder="Password"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordConfirmInput">Confirm Password</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><FaLock /></span>
                        </div>
                        <input type="password" className="form-control" id="passwordConfirmInput" placeholder="Confirm Password"/>
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