import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

const RepeatDaily = ({
  daily: {
    interval,
  },
  handleChange,
}) => (
  <div>
    every
    <input
      name="repeat.daily.interval"
      className="form-control"
      value={interval}
      onChange={numericalFieldHandler(handleChange)}
    />
    day(s)

  </div>
);
RepeatDaily.propTypes = {
  daily: PropTypes.shape({
    interval: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatDaily;
