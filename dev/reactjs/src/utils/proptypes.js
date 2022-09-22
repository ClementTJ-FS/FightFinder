import PropTypes from 'prop-types';

export const Fighters = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  record: PropTypes.string.isRequired,
  img: PropTypes.string,
  country: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  reach: PropTypes.string.isRequired,
  stance: PropTypes.string.isRequired,
  isChamp: PropTypes.bool.isRequired,
}).isRequired;

export const Fights = PropTypes.shape({
  id: PropTypes.number.isRequired,
  weightClass: PropTypes.string.isRequired,
  rounds: PropTypes.number.isRequired,
  isTitle: PropTypes.bool.isRequired,
  type: PropTypes.number,
  Fighters: PropTypes.arrayOf(Fighters).isRequired,
}).isRequired;

export const Event = PropTypes.shape({
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  watchOn: PropTypes.string.isRequired,
  Fights: PropTypes.arrayOf(Fights).isRequired,
}).isRequired;
