import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

const RepeatHourly = ({
  hourly: {
    interval,
  },
  handleChange,
}) => (
  <div>
    every
    <input
      name="repeat.hourly.interval"
      className="form-control"
      value={interval}
      onChange={numericalFieldHandler(handleChange)}
    />
    day(s)

  </div>
);
RepeatHourly.propTypes = {
  hourly: PropTypes.shape({
    interval: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatHourly;
