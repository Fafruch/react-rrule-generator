import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const RepeatHourly = ({
  repeatHourlyFrequency,
  handleChange,
}) => (
  <div>
    every
    <input
      name="repeatHourlyFrequency"
      className="form-control"
      value={repeatHourlyFrequency}
      onChange={(event) => {
        // Convert input from string to number
        const inputNumber = +event.target.value;
        // Check if is a number and is less than 1000
        if (_.isNaN(inputNumber) || inputNumber >= 1000) return;

        handleChange('repeatHourlyFrequency', inputNumber);
      }}
    />
    day(s)
  </div>
);
RepeatHourly.propTypes = {
  repeatHourlyFrequency: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatHourly;
