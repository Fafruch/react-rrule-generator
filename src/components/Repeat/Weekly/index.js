import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const RepeatWeekly = ({
  weekly: {
    interval,
    days,
  },
  handleChange,
}) => (
  <div>
    every
    <input
      name="repeat.weekly.interval"
      className="form-control"
      value={interval}
      onChange={(event) => {
        // Convert input from string to number
        const inputNumber = +event.target.value;
        // Check if is a number and is less than 1000
        if (_.isNaN(inputNumber) || inputNumber >= 1000) return;

        const editedEvent = { target: { value: inputNumber, name: event.target.name } };
        handleChange(editedEvent);
      }}
    />
    week(s)

    <br />

    <div className="btn-group" data-toggle="buttons">
      {_.toPairs(days).map((day) => {
        const dayName = day[0];
        const isDayActive = day[1];
        return (
          <label key={dayName} className={`btn btn-primary ${isDayActive && 'active'}`}>
            <input
              type="checkbox"
              name={`repeat.weekly.days[${dayName}]`}
              className="form-control"
              checked={isDayActive}
              onChange={(event) => {
                const editedEvent = {
                  ...event,
                  target: {
                    ...event.target,
                    value: !isDayActive,
                    name: event.target.name,
                  },
                };

                handleChange(editedEvent);
              }}
            />
            {dayName}
          </label>
        );
      })}
    </div>
  </div>
);
RepeatWeekly.propTypes = {
  weekly: PropTypes.shape({
    interval: PropTypes.number.isRequired,
    days: PropTypes.shape({
      mon: PropTypes.bool.isRequired,
      tue: PropTypes.bool.isRequired,
      wed: PropTypes.bool.isRequired,
      thu: PropTypes.bool.isRequired,
      fri: PropTypes.bool.isRequired,
      sat: PropTypes.bool.isRequired,
      sun: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatWeekly;
