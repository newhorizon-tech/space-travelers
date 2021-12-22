import React from 'react';
import './missions.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { missionJoin, missionLeave } from '../../redux/ missions/missionsReducer';

function Mission({ singleMission }) {
  const dispatch = useDispatch();

  const joinedHandler = () => {
    dispatch(missionJoin(singleMission.mission_id));
  };
  const leftHandler = () => {
    dispatch(missionLeave(singleMission.mission_id));
  };

  return (
    <div className="missionRaw">
      <div className="missionName">
        {singleMission.mission_name}

      </div>
      <div className="missionDescription">
        {singleMission.description}
      </div>

      {singleMission.joined && (
        <div className="missionStatus missionStatus-border">
          <button type="submit" className="action-btn active-member"> ACTIVE MEMBER</button>
        </div>
      )}
      {!singleMission.joined && (
        <div className="missionStatus missionStatus-border">
          <button type="submit" className="action-btn not-member">NOT A MEMBER</button>
        </div>
      )}

      {singleMission.joined && (
        <div className="missionStatus missionStatus-border">
          <button type="submit" className="action-btn joined" onClick={leftHandler}>LEAVE MISSION</button>
        </div>
      )}

      {!singleMission.joined && (
      <div className="missionStatus missionStatus-border">
        <button type="submit" className="action-btn not-joined" onClick={joinedHandler}>JOIN MISSION</button>
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
    joined: PropTypes.bool,
  }).isRequired,
};

export default Mission;
