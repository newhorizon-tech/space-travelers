import fetchMissions from '../../api/missionsApi';

const GET_MISSIONS = 'GET_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

const initState = [{
  joined: false,
}];

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
  const convertedData = dataToArr(data);
  dispatch({ type: GET_MISSIONS, payload: convertedData });
};

export const missionJoin = (missionId) => async (dispatch) => {
  const data = await fetchMissions();
  const convertedData = dataToArr(data);
  dispatch({ type: JOIN_MISSION, missions: convertedData, missionId });
};
export const missionLeave = (missionId) => async (dispatch) => {
  const data = await fetchMissions();
  const convertedData = dataToArr(data);
  dispatch({ type: LEAVE_MISSION, missions: convertedData, missionId });
};

const missionsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
      return action.missions.map((mission) => {
        if (mission.mission_id !== action.missionId) {
          return mission;
        }
        return { ...mission, joined: true };
      });

    case LEAVE_MISSION:
      return action.missions.map((mission) => {
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
