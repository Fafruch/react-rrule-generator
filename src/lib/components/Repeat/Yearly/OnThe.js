import React from 'react';
import PropTypes from 'prop-types';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
  'Day', 'Weekday', 'Weekend day'];

const RepeatYearlyOnThe = ({
  mode,
  onThe,
  handleChange,
}) => (
  <div className={`form-group row d-flex align-items-sm-center ${mode !== 'on the' && 'opacity-50'}`}>
    <div className="col-sm-1 offset-sm-2">
      <input
        type="radio"
        aria-label="Repeat yearly on the"
        name="repeat.yearly.mode"
        className="form-control"
        checked={mode === 'on the'}
        value="on the"
        onChange={handleChange}
      />
    </div>
    <div className="col-sm-1">
      on the
    </div>

    <div className="col-sm-2">
      <select
        name="repeat.yearly.onThe.which"
        aria-label="Repeat yearly on the which"
        className="form-control"
        value={onThe.which}
        disabled={mode !== 'on the'}
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
        name="repeat.yearly.onThe.day"
        aria-label="Repeat yearly on the day"
        className="form-control"
        value={onThe.day}
        disabled={mode !== 'on the'}
        onChange={handleChange}
      >
        {days.map(day => <option key={day} value={day}>{day}</option>)}
      </select>
    </div>

    <div className="col-sm-1">
      of
    </div>

    <div className="col-sm-2">
      <select
        name="repeat.yearly.onThe.month"
        aria-label="Repeat yearly on the month"
        className="form-control"
        value={onThe.month}
        disabled={mode !== 'on the'}
        onChange={handleChange}
      >
        {months.map(month => <option key={month} value={month}>{month}</option>)}
      </select>
    </div>

  </div>
);
RepeatYearlyOnThe.propTypes = {
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  onThe: PropTypes.shape({
    which: PropTypes.oneOf(['First', 'Second', 'Third', 'Fourth', 'Last']).isRequired,
    month: PropTypes.oneOf(months).isRequired,
    day: PropTypes.oneOf(days).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatYearlyOnThe;
