import React, { useState } from 'react';
import './missions.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { missionJoin, missionLeave } from '../../redux/ missions/missionsReducer';

function Mission({ singleMission }) {
  const [joined, setJoined] = useState(false);
  const dispatch = useDispatch();

  const joinedHandler = () => {
    setJoined(true);
    dispatch(missionJoin(singleMission.mission_id));
    console.log(singleMission.mission_id);
  };
  const leftHandler = () => {
    setJoined(false);
    dispatch(missionLeave(singleMission.mission_id));
    console.log(singleMission.mission_id);
  };

  return (
    <div className="missionRaw">
      <div className="missionName">
        {singleMission.mission_name}
      </div>
      <div className="missionDescription">
        {singleMission.description}
      </div>
      <div className="missionStatus missionStatus-border">
        <button className="action-btn" type="submit">NOT A MEMBER</button>
      </div>
      {joined ? (
        <div className="missionStatus missionStatus-border">
          <button type="submit" className="action-btn joined" value={joined} onClick={leftHandler}>LEAVE MISSION</button>
        </div>
      ) : (
        <div className="missionStatus missionStatus-border">
          <button type="submit" className="action-btn not-joined" value={joined} onClick={joinedHandler}>JOIN MISSION</button>
        </div>
      ) }

    </div>
  );
}

Mission.propTypes = {
  singleMission: PropTypes.shape({
    mission_name: PropTypes.string,
    singleMission: PropTypes.string,
    description: PropTypes.string,
    mission_id: PropTypes.string,

  }).isRequired,
};

export default Mission;
