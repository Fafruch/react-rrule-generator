import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const EndAfter = ({
  endAfter,
  handleChange,
}) => (
  <div>
    <input
      name="endAfter"
      className="form-control"
      value={endAfter}
      onChange={(event) => {
        // Convert input from string to number
        const inputNumber = +event.target.value;
        // Check if is a number and is less than 1000
        if (_.isNaN(inputNumber) || inputNumber >= 1000) return;

        handleChange('endAfter', inputNumber);
      }}
    />
    executions.
  </div>
);

EndAfter.propTypes = {
  endAfter: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EndAfter;
