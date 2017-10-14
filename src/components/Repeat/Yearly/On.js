import React from 'react';
import PropTypes from 'prop-types';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const RepeatYearlyOn = ({
  mode,
  on,
  handleChange,
}) => (
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
      name="repeat.yearly.on.month"
      className="form-control"
      value={on.month}
      onChange={event => handleChange(event)}
    >
      {months.map(month => <option key={month} value={month}>{month}</option>)}
    </select>

    <select
      name="repeat.yearly.on.day"
      className="form-control"
      value={on.day}
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
);
RepeatYearlyOn.propTypes = {
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  on: PropTypes.shape({
    month: PropTypes.oneOf(months).isRequired,
    day: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatYearlyOn;
