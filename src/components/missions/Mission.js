import React from 'react';
import './missions.css';
import PropTypes from 'prop-types';

function Mission({ singleMission }) {
  return (
    <div className="missionRaw">
      <div className="missionName">
        {singleMission.mission_name}
        {' '}
      </div>
      <div className="missionDescription">
        {' '}
        {singleMission.description}
      </div>
      <div className="missionStatus missionStatus-border">data </div>
      <div className="missionStatus">data </div>
    </div>
  );
}

Mission.propTypes = {
  singleMission: PropTypes.shape({
    mission_name: PropTypes.string,
    singleMission: PropTypes.string,
    description: PropTypes.string,

  }).isRequired,
};

export default Mission;
