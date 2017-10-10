import React from 'react';
import PropTypes from 'prop-types';

const End = ({
  endMode,
  endAfter,
  endOnDate,
  handleChange,
}) => (
  <div>
    <h2>End</h2>
    <select
      className="form-control"
      value={endMode}
      onChange={event => handleChange('endMode', event.target.value)}
    >
      <option value="Never">Never</option>
      <option value="After">After</option>
      <option value="On date">On date</option>
    </select>

    {
      endMode === 'After' &&
        <div>
          <input
            name="endAfter"
            className="form-control"
            value={endAfter}
            onChange={(event) => {
              // Convert input from string to number
              const inputNumber = +event.target.value;
              // Check if is a number and is less than 1000
              if (isNaN(inputNumber) || inputNumber >= 1000) return;

              handleChange('endAfter', inputNumber);
            }}
          />
          executions.
        </div>
    }

    {
      endMode === 'On date' &&
      <input
        className="form-control"
        value={endOnDate}
        onChange={event => handleChange('endOnDate', event.target.value)}
      />
    }

  </div>
);

End.propTypes = {
  endMode: PropTypes.string.isRequired,
  endAfter: PropTypes.number.isRequired,
  endOnDate: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default End;
