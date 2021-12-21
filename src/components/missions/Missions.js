import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { missionsFetch } from '../../redux/ missions/missionsReducer';
import Mission from './Mission';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions_reducer);

  useEffect(() => { dispatch(missionsFetch()); }, []);

  return (
    <div className="mission-container">
      <div className="missionRaw">
        <div className="missionName">Mission</div>
        <div className="missionDescription">Description</div>
        <div className="missionStatus missionStatus-border">Status</div>
        <div className="missionStatus">Status</div>
      </div>
      {
        missions.map((mission) => <Mission singleMission={mission} key={mission.mission_id} />)
      }
    </div>
  );
}

export default Missions;
