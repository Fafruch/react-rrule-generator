import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

const RepeatHourly = ({
  hourly: {
    interval,
  },
  handleChange,
}) => (
  <div className="form-group row d-flex align-items-sm-center">
    <div className="col-sm-3 offset-sm-2">
      every
    </div>
    <div className="col-sm-2">
      <input
        name="repeat.hourly.interval"
        aria-label="Repeat hourly interval"
        className="form-control"
        value={interval}
        onChange={numericalFieldHandler(handleChange)}
      />
    </div>
    <div className="col-sm-3">
      day(s)
    </div>
  </div>
);
RepeatHourly.propTypes = {
  hourly: PropTypes.shape({
    interval: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatHourly;
