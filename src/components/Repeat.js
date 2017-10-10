import React from 'react';
import PropTypes from 'prop-types';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
  'Day', 'Weekday', 'Weekend day'];

const Repeat = ({
  repeatFrequency,
  repeatMode,
  onMonth,
  onDay,
  onTheWhich,
  onTheDay,
  onTheMonth,
  handleChange,
}) => (
  <div>
    <h2>Repeat</h2>

    <select
      name="repeatFrequency"
      className="form-control"
      value={repeatFrequency}
      onChange={event => handleChange('repeatFrequency', event.target.value)}
    >
      <option value="Yearly">Yearly</option>
      <option value="Monthly">Monthly</option>
      <option value="Weekly">Weekly</option>
      <option value="Daily">Daily</option>
      <option value="Hourly">Hourly</option>
    </select>

    {/* ON */}

    <div>
      <input
        type="radio"
        name="on"
        className="form-control"
        checked={repeatMode === 'on'}
        onChange={() => handleChange('repeatMode', 'on')}
      />
      on

      <select
        name="onMonth"
        className="form-control"
        value={onMonth}
        onChange={event => handleChange('onMonth', event.target.value)}
      >
        {months.map(month => <option key={month} value={month}>{month}</option>)}
      </select>

      <select
        name="onDay"
        className="form-control"
        value={onDay}
        onChange={event => handleChange('onDay', +event.target.value)}
      >
        {[...new Array(31)].map((day, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
      </select>
    </div>

    {/* ON THE */}

    <div>
      <input
        type="radio"
        name="onThe"
        className="form-control"
        checked={repeatMode === 'on the'}
        onChange={() => handleChange('repeatMode', 'on the')}
      />
      on the

      <select
        name="onTheWhich"
        className="form-control"
        value={onTheWhich}
        onChange={event => handleChange('onTheWhich', event.target.value)}
      >
        <option value="First">First</option>
        <option value="Second">Second</option>
        <option value="Third">Third</option>
        <option value="Fourth">Fourth</option>
        <option value="Last">Last</option>
      </select>

      <select
        name="onTheDay"
        className="form-control"
        value={onTheDay}
        onChange={event => handleChange('onTheDay', event.target.value)}
      >
        {days.map(day => <option key={day} value={day}>{day}</option>)}
      </select>

      of

      <select
        name="onTheMonth"
        className="form-control"
        value={onTheMonth}
        onChange={event => handleChange('onTheMonth', event.target.value)}
      >
        {months.map(month => <option key={month} value={month}>{month}</option>)}
      </select>

    </div>

  </div>
);

Repeat.propTypes = {
  repeatFrequency: PropTypes.string.isRequired,
  repeatMode: PropTypes.string.isRequired,
  onMonth: PropTypes.string.isRequired,
  onDay: PropTypes.number.isRequired,
  onTheWhich: PropTypes.string.isRequired,
  onTheDay: PropTypes.string.isRequired,
  onTheMonth: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Repeat;
