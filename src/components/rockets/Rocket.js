import PropTypes from 'prop-types';

const Rocket = (props) => {
  const {
    name, description, image,
  } = props;

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
        <button type="button" className="rocket-btn"> Reserve Rocket </button>
      </div>
    </div>
  );
};

export default Rocket;

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
