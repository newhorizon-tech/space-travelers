import axios from 'axios';

const fetchMissions = async () => {
  const res = await axios.get('https://api.spacexdata.com/v3/missions');
  return res.data;
};

export default fetchMissions;
