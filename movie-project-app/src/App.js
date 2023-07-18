import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { getUserFromLocalStorage } from './localStorageManager';
import Homepage from './components/Homepage/Homepage';
import MoviePage from './components/MoviePage/MoviePage';
import Profile from './components/Profile/Profile';

import Search from './components/Search/Search';
import Navbar from './components/header';
import Login from './components/Login/Login';


import Registration from './components/Registration/Registration';
import RegistrationStep2 from './components/Registration/RegistrationStep2';
import RegistrationStep3 from './components/Registration/RegistrationStep3';
import RegistrationStep4 from './components/Registration/RegistrationStep4';



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromLocalStorage = getUserFromLocalStorage();
    if (userFromLocalStorage) {
      setUser(userFromLocalStorage);
    }
  }, []);


    return (
      <div>
        <Navbar login={user} />
       
        <Routes>
          <Route path="/" element={<Homepage
         
          />} />



          <Route path="/Profile" element={<Profile

          />} />



          <Route path="/Search" element={<Search

          />} />

          
          <Route path="/Search/:genre" element={<Search


          />} />

          <Route path="/Login" element={<Login

          />} />
          
          <Route path="/movie/:id" element={<MoviePage />} />


          <Route path="/Registration" element={<Registration
         
          />} />


          <Route path="/RegistrationStep2" element={<RegistrationStep2
         
          />} />


          <Route path="/RegistrationStep3" element={<RegistrationStep3
         
          />} />

          <Route path="/RegistrationStep4" element={<RegistrationStep4
         
          />} />
         
        </Routes>
      </div>
    );
  }




export default App;
