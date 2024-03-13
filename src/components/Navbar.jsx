import PropTypes from 'prop-types';


function Navbar ({setPage})  {
  return (
    <nav>
      <button onClick={() => setPage('planets')}>Planets</button>
      <button onClick={() => setPage('people')}>People</button>
    </nav>
  )
}

Navbar.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Navbar
