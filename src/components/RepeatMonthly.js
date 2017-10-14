import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
  'Day', 'Weekday', 'Weekend day'];

const RepeatMonthly = ({
  monthly: {
    mode,
    frequency,
    onDay,
    onTheDay,
    onTheWhich,
  },
  handleChange,
}) => (
  <div>
    <div>

      every
      <input
        name="repeat.monthly.frequency"
        className="form-control"
        value={frequency}
        onChange={(event) => {
          // Convert input from string to number
          const inputNumber = +event.target.value;
          // Check if is a number and is less than 1000
          if (_.isNaN(inputNumber) || inputNumber >= 1000) return;

          const editedEvent = { ...event, target: { ...event.target, value: inputNumber, name: event.target.name } };
          handleChange(editedEvent);
        }}
      />
      month(s)

    {/* ON DAY */}

      <input
        type="radio"
        name="repeat.monthly.mode"
        className="form-control"
        checked={mode === 'on day'}
        onChange={(event) => {
          const editedEvent = { ...event, target: { ...event.target, value: 'on day', name: event.target.name } };
          handleChange(editedEvent);
        }}
      />
      on day

      <select
        name="repeat.monthly.onDay"
        className="form-control"
        value={onDay}
        onChange={event => handleChange(event)}
      >
        {[...new Array(31)].map((day, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
      </select>

    </div>

    {/* ON THE */}

    <div>
      <input
        type="radio"
        name="repeat.monthly.mode"
        className="form-control"
        checked={mode === 'on the'}
        onChange={(event) => {
          const editedEvent = { ...event, target: { ...event.target, value: 'on the', name: event.target.name } };
          handleChange(editedEvent);
        }}
      />
      on the

      <select
        name="repeat.monthly.onTheWhich"
        className="form-control"
        value={onTheWhich}
        onChange={event => handleChange(event)}
      >
        <option value="First">First</option>
        <option value="Second">Second</option>
        <option value="Third">Third</option>
        <option value="Fourth">Fourth</option>
        <option value="Last">Last</option>
      </select>

      <select
        name="repeat.monthly.onTheDay"
        className="form-control"
        value={onTheDay}
        onChange={event => handleChange(event)}
      >
        {days.map(day => <option key={day} value={day}>{day}</option>)}
      </select>

    </div>
  </div>
);
RepeatMonthly.propTypes = {
  monthly: PropTypes.shape({
    mode: PropTypes.oneOf(['on day', 'on the']).isRequired,
    frequency: PropTypes.number.isRequired,
    onDay: PropTypes.number.isRequired,
    onTheDay: PropTypes.oneOf(days).isRequired,
    onTheWhich: PropTypes.oneOf(['First', 'Second', 'Third', 'Fourth', 'Last']).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatMonthly;
