import React from 'react';
import MisssionsProfile from './MissionsProfile';
import RocketsProfile from './RocketsProfile';
import './Myprofile.css';

function Myprofile() {
  return (
    <div className="myProfile-container">
      <MisssionsProfile />
      <RocketsProfile />
    </div>
  );
}

export default Myprofile;
