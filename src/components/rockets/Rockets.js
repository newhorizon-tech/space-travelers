import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { rocketsAsync } from '../../redux/rockets/rocketsSlice';
import './Rockets.css';
import Rocket from './Rocket';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.value);
  const status = useSelector((state) => state.rockets.status);
  const loading = status === 'loading';
  const loaded = status === 'loaded';

  useEffect(() => {
    if (!loaded) {
      dispatch(rocketsAsync());
    }
  }, []);

  return (
    <div id="rockets">
      <Loader type="Puff" visible={loading} color="black" />
      <span id="loading">{loading ? 'Loading' : ''}</span>
      {
        rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            name={rocket.rocket_name}
            description={rocket.description}
            image={rocket.flickr_images ? rocket.flickr_images[0] : ''}
          />
        ))
}
    </div>
  );
}

export default Rockets;
