import fetchMissions from '../../api/missionsApi';

const GET_MISSIONS = 'GET_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

const initState = [];

const dataToArr = (data) => {
  const arr = [];
  Object.keys(data).map((key) => {
    const mission = data[key];
    return arr.push({ ...mission, joined: false });
  });
  return arr;
};

export const missionsFetch = () => async (dispatch) => {
  const data = await fetchMissions();
  const allMissions = dataToArr(data);
  dispatch({ type: GET_MISSIONS, missions: allMissions });
};

export const missionJoin = (missionId) => async (dispatch) => {
  dispatch({ type: JOIN_MISSION, missionId });
};
export const missionLeave = (missionId) => async (dispatch) => {
  dispatch({ type: LEAVE_MISSION, missionId });
};

const missionsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.missions;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.missionId) {
          return mission;
        }
        return { ...mission, joined: true };
      });

    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.missionId) {
          return mission;
        }
        return { ...mission, joined: false };
      });
    default:
      return state;
  }
};

export default missionsReducer;
