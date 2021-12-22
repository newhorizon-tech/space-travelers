import React from 'react';
import { useSelector } from 'react-redux';

function MissionsProfile() {
  const missions = useSelector((state) => state.missions_reducer);
  console.log('here', missions);
  return (
    <div>
      <h1>MissionsProfile</h1>
      {missions.map((mission) => (
        <div key={mission.mission_id}>
          { mission.joined && (
            mission.mission_name
          ) }
        </div>
      ))}
    </div>
  );
}

export default MissionsProfile;
