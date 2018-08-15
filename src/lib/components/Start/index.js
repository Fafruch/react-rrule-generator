import React from 'react';
import PropTypes from 'prop-types';
import StartOnDate from './OnDate';

const Start = ({
  id,
  start: {
    onDate,
  },
  handleChange,
}) => (
  <div className="px-3">
    <div className="form-group row">
      <div className="col-sm-2 text-sm-right">
        <label
          htmlFor={id}
          className="col-form-label"
        >
          <strong>
            Start
          </strong>
        </label>
      </div>
      <StartOnDate id={id} onDate={onDate} handleChange={handleChange} />
    </div>
  </div>
);

Start.propTypes = {
  id: PropTypes.string.isRequired,
  start: PropTypes.shape({
    onDate: PropTypes.object.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Start;
