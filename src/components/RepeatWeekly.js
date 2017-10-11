import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const RepeatWeekly = ({
  repeatWeeklyFrequency,
  repeatWeeklyDays,
  handleChange,
}) => (
  <div>
    every
    <input
      name="repeatWeeklyFrequency"
      className="form-control"
      value={repeatWeeklyFrequency}
      onChange={(event) => {
        // Convert input from string to number
        const inputNumber = +event.target.value;
        // Check if is a number and is less than 1000
        if (_.isNaN(inputNumber) || inputNumber >= 1000) return;

        handleChange('repeatWeeklyFrequency', inputNumber);
      }}
    />
    week(s)

    <br />

    <div className="btn-group" data-toggle="buttons">
      {_.toPairs(repeatWeeklyDays).map((day) => {
        const dayName = day[0];
        const isDayActive = day[1];
        return (
          <label className={`btn btn-primary ${isDayActive && 'active'}`}>
            <input
              type="checkbox"
              name={`repeatWeeklyDays_${dayName}`}
              className="form-control"
              checked={isDayActive}
              onChange={() => handleChange('repeatWeeklyDays', { ...repeatWeeklyDays, [dayName]: !isDayActive })}
            />
            {dayName}
          </label>
        );
      })}
    </div>
  </div>
);
RepeatWeekly.propTypes = {
  repeatWeeklyFrequency: PropTypes.number.isRequired,
  repeatWeeklyDays: PropTypes.shape({
    mon: PropTypes.bool.isRequired,
    tue: PropTypes.bool.isRequired,
    wed: PropTypes.bool.isRequired,
    thu: PropTypes.bool.isRequired,
    fri: PropTypes.bool.isRequired,
    sat: PropTypes.bool.isRequired,
    sun: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatWeekly;
