import { useSelector } from 'react-redux';

const RocketsProfile = () => {
  const myRockets = useSelector((state) => state.rockets.value.filter((x) => !!x.reserved));

  return (
    <div className="rocketsProfile">
      <h1>My Rockets</h1>
      <ul id="my-mission" className="my-list">
        {myRockets.map((rocket) => (
          <li key={rocket.id}>
            <span>{rocket.rocket_name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RocketsProfile;
