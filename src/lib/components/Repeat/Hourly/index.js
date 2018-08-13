import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

const RepeatHourly = ({
  id,
  hourly: {
    interval,
  },
  handleChange,
}) => (
  <div className="form-group row d-flex align-items-sm-center">
    <div className="col-sm-1 offset-sm-2">
      every
    </div>
    <div className="col-sm-2">
      <input
        id={`${id}-interval`}
        name="repeat.hourly.interval"
        aria-label="Repeat hourly interval"
        className="form-control"
        value={interval}
        onChange={numericalFieldHandler(handleChange)}
      />
    </div>
    <div className="col-sm-1">
      day(s)
    </div>
  </div>
);
RepeatHourly.propTypes = {
  id: PropTypes.string.isRequired,
  hourly: PropTypes.shape({
    interval: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatHourly;
