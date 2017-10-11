import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
  'Day', 'Weekday', 'Weekend day'];

const RepeatMonthly = ({
  repeatMonthlyMode,
  repeatMonthlyFrequency,
  repeatMonthlyOnDay,
  repeatMonthlyOnTheDay,
  repeatMonthlyOnTheWhich,
  handleChange,
}) => (
  <div>
    <div>

      every
      <input
        name="repeatMonthlyFrequency"
        className="form-control"
        value={repeatMonthlyFrequency}
        onChange={(event) => {
          // Convert input from string to number
          const inputNumber = +event.target.value;
          // Check if is a number and is less than 1000
          if (_.isNaN(inputNumber) || inputNumber >= 1000) return;

          handleChange('repeatMonthlyFrequency', inputNumber);
        }}
      />
      month(s)

    {/* ON DAY */}

      <input
        type="radio"
        name="repeatMonthlyModeOnDay"
        className="form-control"
        checked={repeatMonthlyMode === 'on day'}
        onChange={() => handleChange('repeatMode', 'on')}
      />
      on day

      <select
        name="repeatMonthlyOnDay"
        className="form-control"
        value={repeatMonthlyOnDay}
        onChange={event => handleChange('repeatMonthlyOnDay', +event.target.value)}
      >
        {[...new Array(31)].map((day, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
      </select>

    </div>

    {/* ON THE */}

    <div>
      <input
        type="radio"
        name="repeatMonthlyOnTheWhich"
        className="form-control"
        checked={repeatMonthlyMode === 'on the'}
        onChange={() => handleChange('repeatMonthlyMode', 'on the')}
      />
      on the

      <select
        name="repeatMonthlyOnTheWhich"
        className="form-control"
        value={repeatMonthlyOnTheWhich}
        onChange={event => handleChange('repeatMonthlyOnTheWhich', event.target.value)}
      >
        <option value="First">First</option>
        <option value="Second">Second</option>
        <option value="Third">Third</option>
        <option value="Fourth">Fourth</option>
        <option value="Last">Last</option>
      </select>

      <select
        name="repeatMonthlyOnTheDay"
        className="form-control"
        value={repeatMonthlyOnTheDay}
        onChange={event => handleChange('repeatMonthlyOnTheDay', event.target.value)}
      >
        {days.map(day => <option key={day} value={day}>{day}</option>)}
      </select>

    </div>
  </div>
);
RepeatMonthly.propTypes = {
  repeatMonthlyMode: PropTypes.oneOf(['on day, on the']).isRequired,
  repeatMonthlyFrequency: PropTypes.number.isRequired,
  repeatMonthlyOnDay: PropTypes.number.isRequired,
  repeatMonthlyOnTheDay: PropTypes.oneOf(days).isRequired,
  repeatMonthlyOnTheWhich: PropTypes.oneOf(['First', 'Second', 'Third', 'Fourth', 'Last']).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatMonthly;
