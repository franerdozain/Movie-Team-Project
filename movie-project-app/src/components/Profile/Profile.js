import { FaGlobe, FaRegImages, FaTheaterMasks, FaVolumeUp } from 'react-icons/fa';
import FormField from './FormField';
import { getUserFromLocalStorage, saveUserToLocalStorage, clearUserFromLocalStorage } from '../../localStorageManager';
import { useEffect, useState } from 'react';

export default function Profile() {
  const userDataInLocalStorage = getUserFromLocalStorage();
  const [userData, setUserData] = useState(userDataInLocalStorage[0]);
  const [selectedMoviesToDelete, setSelectedMoviesToDelete] = useState([]);

 

  const handleSaveClick = () => {
    clearUserFromLocalStorage()
    saveUserToLocalStorage(userData);
  };

  const handleMovieSelection = (event, index) => {
    if (event.target.checked) {
      setSelectedMoviesToDelete((prevSelectedMovies) => [
        ...prevSelectedMovies,
        index
      ]);
    } else {
      setSelectedMoviesToDelete((prevSelectedMovies) =>
        prevSelectedMovies.filter((movieIndex) => movieIndex !== index)
      );
    }
  };

  const deleteSelectedMovies = () => {
    setUserData((prevUserData) => {
      const updatedHistory = prevUserData.history.filter((_, index) => !selectedMoviesToDelete.includes(index));
      const updatedUserData = { ...prevUserData, history: updatedHistory };
      clearUserFromLocalStorage()
      saveUserToLocalStorage(updatedUserData);
      return updatedUserData;
    });
    setSelectedMoviesToDelete([]);
  };
  
  const deleteAllMovies = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      history: []
    }));
  
    const updatedUserData = {
      ...userData,
      history: []
    };
    clearUserFromLocalStorage()
    saveUserToLocalStorage(updatedUserData);
  
    setSelectedMoviesToDelete([]);
  };

  useEffect(() => {
    setUserData(userDataInLocalStorage[0]);
  }, [userDataInLocalStorage]);

  return (
    <div className="container d-flex justify-content-around">
      <div className='d-flex flex-column  border rounded'>
        <FormField
          label="Favorite Language"
          icon={<FaGlobe />}
          value={userData.language}
          onChange={(value) => setUserData({ ...userData, language: value })} />
        <FormField
          label="Favorite Genre"
          icon={<FaTheaterMasks />}
          value={userData.favoriteGenre}
          onChange={(value) => setUserData({ ...userData, favoriteGenre: value })} />
        <FormField
          label="Gallery To Show On Home Page"
          icon={<FaRegImages />}
          value={userData.mainGallery}
          onChange={(value) => setUserData({ ...userData, mainGallery: value })} />
        <FormField
          label="Voice To Hearing Text"
          icon={<FaVolumeUp />}
          value={userData.voice}
          onChange={(value) => setUserData({ ...userData, voice: value })} />
      </div>
      <button className="btn btn-primary" onClick={handleSaveClick}>
        Save
      </button>

      <div className="col-md-6 d-flex flex-column justify-content-between border rounded">
        <div className="list-group">
          {userDataInLocalStorage[0].history.map((movie, index) => (
            <div className="list-group-item border-0" key={index}>
              <input 
              type="checkbox" 
              className='mr-2' 
              onChange={(e) => handleMovieSelection(e, index)}
              />
              
              {movie}
            </div>
          ))}
        </div>
        <div className='d-flex justify-content-around mb-3'>
          <button className="btn btn-secondary" onClick={deleteSelectedMovies} disabled={selectedMoviesToDelete.length === 0}>
            Delete Selected Ones
          </button>
          <button className="btn btn-danger" onClick={deleteAllMovies} disabled={userData.history.length === 0}>
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
}