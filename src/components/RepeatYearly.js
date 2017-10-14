import React from 'react';
import PropTypes from 'prop-types';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
  'Day', 'Weekday', 'Weekend day'];

const RepeatYearly = ({
  yearly: {
    mode,
    onMonth,
    onDay,
    onTheMonth,
    onTheDay,
    onTheWhich,
  },
  handleChange,
}) => (
  <div>

    {/* ON */}

    <div>
      <input
        type="radio"
        name="repeat.yearly.mode"
        className="form-control"
        checked={mode === 'on'}
        onChange={(event) => {
          const editedEvent = { ...event, target: { ...event.target, value: 'on', name: event.target.name } };
          handleChange(editedEvent);
        }}
      />
      on

      <select
        name="repeat.yearly.onMonth"
        className="form-control"
        value={onMonth}
        onChange={event => handleChange(event)}
      >
        {months.map(month => <option key={month} value={month}>{month}</option>)}
      </select>

      <select
        name="repeat.yearly.onDay"
        className="form-control"
        value={onDay}
        onChange={(event) => {
          const editedEvent = {
            ...event,
            target: {
              ...event.target,
              value: +event.target.value,
              name: event.target.name,
            },
          };

          handleChange(editedEvent);
        }}

      >
        {[...new Array(31)].map((day, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
      </select>
    </div>

    {/* ON THE */}

    <div>
      <input
        type="radio"
        name="repeat.yearly.mode"
        className="form-control"
        checked={mode === 'on the'}
        onChange={(event) => {
          const editedEvent = { ...event, target: { ...event.target, value: 'on the', name: event.target.name } };
          handleChange(editedEvent);
        }}
      />
      on the

      <select
        name="repeat.yearly.onTheWhich"
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
        name="repeat.yearly.onTheDay"
        className="form-control"
        value={onTheDay}
        onChange={event => handleChange(event)}
      >
        {days.map(day => <option key={day} value={day}>{day}</option>)}
      </select>

      of

      <select
        name="repeat.yearly.onTheMonth"
        className="form-control"
        value={onTheMonth}
        onChange={event => handleChange(event)}
      >
        {months.map(month => <option key={month} value={month}>{month}</option>)}
      </select>

    </div>
  </div>
);
RepeatYearly.propTypes = {
  yearly: PropTypes.shape({
    mode: PropTypes.oneOf(['on', 'on the']).isRequired,
    onMonth: PropTypes.oneOf(months).isRequired,
    onDay: PropTypes.number.isRequired,
    onTheMonth: PropTypes.oneOf(months).isRequired,
    onTheDay: PropTypes.oneOf(days).isRequired,
    onTheWhich: PropTypes.oneOf(['First', 'Second', 'Third', 'Fourth', 'Last']).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatYearly;
