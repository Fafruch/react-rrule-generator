import React from 'react';
import PropTypes from 'prop-types';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
  'Day', 'Weekday', 'Weekend day'];

const RepeatYearly = ({
  repeatYearlyMode,
  repeatYearlyOnMonth,
  repeatYearlyOnDay,
  repeatYearlyOnTheMonth,
  repeatYearlyOnTheDay,
  repeatYearlyOnTheWhich,
  handleChange,
}) => (
  <div>

    {/* ON */}

    <div>
      <input
        type="radio"
        name="repeatYearlyModeOn"
        className="form-control"
        checked={repeatYearlyMode === 'on'}
        onChange={() => handleChange('repeatYearlyMode', 'on')}
      />
      on

      <select
        name="repeatYearlyOnMonth"
        className="form-control"
        value={repeatYearlyOnMonth}
        onChange={event => handleChange('repeatYearlyOnMonth', event.target.value)}
      >
        {months.map(month => <option key={month} value={month}>{month}</option>)}
      </select>

      <select
        name="repeatYearlyOnDay"
        className="form-control"
        value={repeatYearlyOnDay}
        onChange={event => handleChange('repeatYearlyOnDay', +event.target.value)}
      >
        {[...new Array(31)].map((day, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
      </select>
    </div>

    {/* ON THE */}

    <div>
      <input
        type="radio"
        name="repeatYearlyModeOnThe"
        className="form-control"
        checked={repeatYearlyMode === 'on the'}
        onChange={() => handleChange('repeatYearlyMode', 'on the')}
      />
      on the

      <select
        name="repeatYearlyOnTheWhich"
        className="form-control"
        value={repeatYearlyOnTheWhich}
        onChange={event => handleChange('repeatYearlyOnTheWhich', event.target.value)}
      >
        <option value="First">First</option>
        <option value="Second">Second</option>
        <option value="Third">Third</option>
        <option value="Fourth">Fourth</option>
        <option value="Last">Last</option>
      </select>

      <select
        name="repeatYearlyOnTheDay"
        className="form-control"
        value={repeatYearlyOnTheDay}
        onChange={event => handleChange('repeatYearlyOnTheDay', event.target.value)}
      >
        {days.map(day => <option key={day} value={day}>{day}</option>)}
      </select>

      of

      <select
        name="repeatYearlyOnTheMonth"
        className="form-control"
        value={repeatYearlyOnTheMonth}
        onChange={event => handleChange('repeatYearlyOnTheMonth', event.target.value)}
      >
        {months.map(month => <option key={month} value={month}>{month}</option>)}
      </select>

    </div>
  </div>
);
RepeatYearly.propTypes = {
  repeatYearlyMode: PropTypes.oneOf(['on', 'on the']).isRequired,
  repeatYearlyOnMonth: PropTypes.oneOf(months).isRequired,
  repeatYearlyOnDay: PropTypes.number.isRequired,
  repeatYearlyOnTheMonth: PropTypes.oneOf(months).isRequired,
  repeatYearlyOnTheDay: PropTypes.oneOf(days).isRequired,
  repeatYearlyOnTheWhich: PropTypes.oneOf(['First', 'Second', 'Third', 'Fourth', 'Last']).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatYearly;
