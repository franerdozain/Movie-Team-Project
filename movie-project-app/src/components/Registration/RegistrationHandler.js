import React, { useState } from 'react';
import Registration from './Registration';
import RegistrationStep2 from './RegistrationStep2';
import RegistrationStep3 from './RegistrationStep3';
import RegistrationStep4 from './RegistrationStep4';

function RegistrationHandler() {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    password: '',
    language: '',
    genres: [],
    galleryStyle: '',
    voiceStyle: '',
  });

  return (
    <>
      <Registration registrationData={registrationData} setRegistrationData={setRegistrationData} />
      <RegistrationStep2 registrationData={registrationData} setRegistrationData={setRegistrationData} />
      <RegistrationStep3 registrationData={registrationData} setRegistrationData={setRegistrationData} />
      <RegistrationStep4 registrationData={registrationData} setRegistrationData={setRegistrationData} />
    </>
  );
}

export default RegistrationHandler;
