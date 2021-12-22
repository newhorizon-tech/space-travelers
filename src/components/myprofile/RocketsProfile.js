import { useSelector } from 'react-redux';

const RocketsProfile = () => {
  const myRockets = useSelector((state) => state.rockets.value.filter((x) => !!x.reserved));

  return (
    <div>
      <h1>My Rockets</h1>
      <ul id="my-rockets" className="my-list">
        {myRockets.map((rocket) => (
          <li key={rocket.id}>
            {rocket.rocket_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RocketsProfile;
