import React from 'react';
import MisssionsProfile from './MissionsProfile';
import RocketsProfile from './RocketsProfile';
import './Myprofile.css';

function Myprofile() {
  return (
    <div className="myProfile-container">
      <div className="misssionsProfile"><MisssionsProfile /></div>
      <div className="rocketsProfile"><RocketsProfile /></div>

    </div>
  );
}

export default Myprofile;
