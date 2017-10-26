import React from 'react';
import PropTypes from 'prop-types';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
  'Day', 'Weekday', 'Weekend day'];

const RepeatMonthlyOnThe = ({
  mode,
  onThe,
  handleChange,
}) => {
  const isActive = mode === 'on the';

  return (
    <div className="form-group row d-flex align-items-sm-center">
      <div className="col-sm-1 offset-sm-2">
        <input
          type="radio"
          name="repeat.monthly.mode"
          aria-label="Repeat monthly on the"
          className="form-control"
          value="on the"
          checked={isActive}
          onChange={handleChange}
        />
      </div>
      <div className="col-sm-1">
        on the
      </div>

      <div className="col-sm-2">
        <select
          name="repeat.monthly.onThe.which"
          aria-label="Repeat monthly on the which"
          className="form-control"
          value={onThe.which}
          disabled={!isActive}
          onChange={handleChange}
        >
          <option value="First">First</option>
          <option value="Second">Second</option>
          <option value="Third">Third</option>
          <option value="Fourth">Fourth</option>
          <option value="Last">Last</option>
        </select>
      </div>

      <div className="col-sm-3">
        <select
          name="repeat.monthly.onThe.day"
          aria-label="Repeat monthly on the day"
          className="form-control"
          value={onThe.day}
          disabled={!isActive}
          onChange={handleChange}
        >
          {days.map(day => <option key={day} value={day}>{day}</option>)}
        </select>
      </div>

    </div>
  );
};
RepeatMonthlyOnThe.propTypes = {
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  onThe: PropTypes.shape({
    which: PropTypes.oneOf(['First', 'Second', 'Third', 'Fourth', 'Last']).isRequired,
    day: PropTypes.oneOf(days).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatMonthlyOnThe;
