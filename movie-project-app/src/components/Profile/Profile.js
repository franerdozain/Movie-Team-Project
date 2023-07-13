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
                <input type="text" class="form-control" id="selectedLanguage" placeholder="selected lang / - " />
              </div>
            </div>
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