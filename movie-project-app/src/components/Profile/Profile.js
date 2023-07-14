
import { FaGlobe, FaRegImages, FaTheaterMasks, FaVolumeUp, FaRegEdit } from 'react-icons/fa';

export default function Profile() {
  const testMoviesArray = [
    {
      "title": "Pulp Fiction",
    },
    {
      "title": "Mario Bros"
    },
    {
      "title": "Coco"
    },
    {
      "title": "The Notebook"
    }
  ]

  return (
    <div className="container d-flex justify-content-around">
      <div className='d-flex flex-column  border rounded'>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group text-center">
              <label for="selectedLanguage" className="form-label">Favorite Language</label>

import { FaGlobe, FaRegImages, FaTheaterMasks, FaVolumeUp } from 'react-icons/fa';

export default function Profile() {

  return (
    <div>   
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="selectedLanguage" class="form-label">Favorite Language</label>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><FaGlobe /></span>
                </div>

                <input type="text" className="form-control" id="selectedLanguage" placeholder="selected lang / - " />
                <div className="input-group-append">
                  <span className="input-group-text"><FaRegEdit /></span>
                </div>

                <input type="text" class="form-control" id="selectedLanguage" placeholder="selected lang / - " />

              </div>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-md-12">
            <div className="form-group text-center">
              <label for="selectedGenre" className="form-label">Favorite Genre</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><FaTheaterMasks /></span>
                </div>
                <input type="text" className="form-control" id="selectedGenre" placeholder="selected genre / - " />
                <div className="input-group-append">
                  <span className="input-group-text"><FaRegEdit /></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group text-center">
              <label for="selectedGallery" className="form-label">Gallery To Show On Home Page</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><FaRegImages /></span>
                </div>
                <input type="text" className="form-control" id="selectedGallery" placeholder="selected gallery / - " />
                <div className="input-group-append">
                  <span className="input-group-text"><FaRegEdit /></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group text-center">
              <label for="selectedVoice" className="form-label">Voice To Hearing Text</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><FaVolumeUp /></span>
                </div>
                <input type="text" className="form-control" id="selectedVoice" placeholder="selected voice / - " />
                <div className="input-group-append">
                  <span className="input-group-text"><FaRegEdit /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 d-flex flex-column justify-content-between border rounded">
        <div className="list-group">
          {testMoviesArray.map((movie, index) => (
            <div className="list-group-item border-0" key={index}>
              <input type="checkbox" className='mr-2' />
              {movie.title}
            </div>
          ))}
        </div>
        <div className='d-flex justify-content-around mb-3'>
          <button className="btn btn-secondary">
            Delete Selected Ones
          </button>
          <button className="btn btn-danger">
            Delete All
          </button>
        </div>
      </div>

  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label for="selectedGenre" class="form-label">Favorite Genre</label>
        <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><FaTheaterMasks /></span>
                </div>
        <input type="text" class="form-control" id="selectedGenre" placeholder="selected genre / - " />
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label for="selectedGallery" class="form-label">Gallery To Show On Home Page</label>
        <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><FaRegImages /></span>
                </div>
        <input type="text" class="form-control" id="selectedGallery" placeholder="selected gallery / - " />
      </div>
    </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label for="selectedVoice" class="form-label">Voice To Hearing Text</label>
        <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><FaVolumeUp /></span>
                </div>
        <input type="text" class="form-control" id="selectedVoice" placeholder="selected voice / - " />
      </div>
    </div>
    </div>
  </div>
</div>




    </div>
  );
}