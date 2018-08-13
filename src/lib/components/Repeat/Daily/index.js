import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

const RepeatDaily = ({
  id,
  daily: {
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
        name="repeat.daily.interval"
        aria-label="Repeat daily interval"
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
RepeatDaily.propTypes = {
  id: PropTypes.string.isRequired,
  daily: PropTypes.shape({
    interval: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatDaily;
