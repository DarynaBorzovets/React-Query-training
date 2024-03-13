import PropTypes from 'prop-types';

function Planet({planet}) {
  return (
    <div className='card'>
        <h3>{planet.name}</h3>
      
    </div>
  )
}

Planet.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    // can define other properties of planet if needed
  }).isRequired,
};

export default Planet
