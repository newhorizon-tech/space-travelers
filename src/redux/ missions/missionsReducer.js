import fetchMissions from '../../api/missionsApi';

const GET_MISSIONS = 'GET_MISSIONS';
const initState = [];

const dataToArr = (data) => {
  const arr = [];
  Object.keys(data).map((key) => {
    const mission = data[key];
    return arr.push(mission);
  });
  return arr;
};

export const missionsFetch = () => async (dispatch) => {
  const data = await fetchMissions();
  const convertedData = dataToArr(data);
  dispatch({ type: GET_MISSIONS, payload: convertedData });
};

const missionsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
