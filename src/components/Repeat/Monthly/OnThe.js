import React from 'react';
import PropTypes from 'prop-types';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
  'Day', 'Weekday', 'Weekend day'];

const RepeatMonthlyOnThe = ({
  mode,
  onThe,
  handleChange,
}) => (
  <div>
    <input
      type="radio"
      name="repeat.monthly.mode"
      className="form-control"
      checked={mode === 'on the'}
      onChange={(event) => {
        const editedEvent = { target: { value: 'on the', name: event.target.name } };
        handleChange(editedEvent);
      }}
    />
    on the

    <select
      name="repeat.monthly.onThe.which"
      className="form-control"
      value={onThe.which}
      onChange={event => handleChange(event)}
    >
      <option value="First">First</option>
      <option value="Second">Second</option>
      <option value="Third">Third</option>
      <option value="Fourth">Fourth</option>
      <option value="Last">Last</option>
    </select>

    <select
      name="repeat.monthly.onThe.day"
      className="form-control"
      value={onThe.day}
      onChange={event => handleChange(event)}
    >
      {days.map(day => <option key={day} value={day}>{day}</option>)}
    </select>

  </div>
);
RepeatMonthlyOnThe.propTypes = {
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  onThe: PropTypes.shape({
    which: PropTypes.oneOf(['First', 'Second', 'Third', 'Fourth', 'Last']).isRequired,
    day: PropTypes.oneOf(days).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatMonthlyOnThe;
