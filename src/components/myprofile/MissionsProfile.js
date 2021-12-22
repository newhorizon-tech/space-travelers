import React from 'react';
import { useSelector } from 'react-redux';

function MissionsProfile() {
  const missions = useSelector((state) => state.missions_reducer);
  return (
    <div className="misssionsProfile">
      <h1>My Missions</h1>
      <ul id="my-rockets" className="my-list">
        {missions.map((mission) => (
          mission.joined && (
          <li key={mission.mission_id}>
            <span>{mission.mission_name}</span>
          </li>
          )
        ))}
      </ul>
    </div>
  );
}

export default MissionsProfile;
