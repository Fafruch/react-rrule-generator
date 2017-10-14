import React from 'react';
import PropTypes from 'prop-types';

const RepeatMonthlyOn = ({
  mode,
  on,
  handleChange,
}) => (
  <div>
    <input
      type="radio"
      name="repeat.monthly.mode"
      className="form-control"
      checked={mode === 'on'}
      onChange={(event) => {
        const editedEvent = { ...event, target: { ...event.target, value: 'on', name: event.target.name } };
        handleChange(editedEvent);
      }}
    />
    on day

    <select
      name="repeat.monthly.on.day"
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
RepeatMonthlyOn.propTypes = {
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  on: PropTypes.shape({
    day: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatMonthlyOn;
