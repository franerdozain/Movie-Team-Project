import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
//import MoviePage from './components/MoviePage/MoviePage';
import Profile from './components/Profile/Profile';


function App() {
   





    return (
      <div>
        <h2>Hulix</h2>
        
        <Routes>
          <Route path="/" element={<Homepage 
          
          />} />


          <Route path="/Profile" element={<Profile 
          
          />} />
          
           {/* <Route path="/MoviePage" element={<MoviePage
      
          />} />   */}
          
        </Routes>
      </div>
    );
  }


export default App;
