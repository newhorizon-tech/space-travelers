import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { book, cancel } from '../../redux/rockets/rocketsSlice';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, description, image,
  } = props;

  const booked = useSelector((state) => !!(state.rockets.value.find((x) => x.id === id).reserved));

  const handleBooking = (booked, id) => {
    if (booked) {
      dispatch(cancel(id));
    } else {
      dispatch(book(id));
    }
  };

  return (
    <div className="rocket">
      <img alt="rocket" src={image} />
      <div className="info">
        <h2>
          {name}
        </h2>
        <p>
          {description}
        </p>
        <button
          type="button"
          className={`rocket-btn ${booked ? 'booked' : ''}`}
          onClick={() => { handleBooking(booked, id); }}
        >
          {booked ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

export default Rocket;

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
