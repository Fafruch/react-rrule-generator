import React from 'react';
import PropTypes from 'prop-types';
import EndAfter from './EndAfter';
import EndOnDate from './EndOnDate';

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
        <EndAfter
          endAfter={endAfter}
          handleChange={handleChange}
        />
    }

    {
      endMode === 'On date' &&
        <EndOnDate
          endOnDate={endOnDate}
          handleChange={handleChange}
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
