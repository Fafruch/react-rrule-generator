import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const RepeatDaily = ({
  repeatDailyFrequency,
  handleChange,
}) => (
  <div>
    every
    <input
      name="repeatDailyFrequency"
      className="form-control"
      value={repeatDailyFrequency}
      onChange={(event) => {
        // Convert input from string to number
        const inputNumber = +event.target.value;
        // Check if is a number and is less than 1000
        if (_.isNaN(inputNumber) || inputNumber >= 1000) return;

        handleChange('repeatDailyFrequency', inputNumber);
      }}
    />
    day(s)

  </div>
);
RepeatDaily.propTypes = {
  repeatDailyFrequency: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatDaily;
