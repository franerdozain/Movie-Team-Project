import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
//import MoviePage from './components/MoviePage/MoviePage';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';
import Navbar from './components/header';
import Login from './components/Login/Login';


function App() {
   





    return (
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Homepage 
          
          />} />


          <Route path="/Profile" element={<Profile

          />} />

          <Route path="/Search" element={<Search

          />} />

          <Route path="/Login" element={<Login

          />} />


           {/* <Route path="/MoviePage" element={<MoviePage
      
          />} />   */}
          
        </Routes>
      </div>
    );
  }


export default App;
