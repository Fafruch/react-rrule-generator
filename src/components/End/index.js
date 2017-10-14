import React from 'react';
import PropTypes from 'prop-types';
import EndAfter from './After';
import EndOnDate from './OnDate';

const End = ({
  end: {
    mode,
    after,
    onDate,
  },
  handleChange,
}) => (
  <div>
    <h2>End</h2>
    <select
      name="end.mode"
      className="form-control"
      value={mode}
      onChange={event => handleChange(event)}
    >
      <option value="Never">Never</option>
      <option value="After">After</option>
      <option value="On date">On date</option>
    </select>

    {mode === 'After' && <EndAfter after={after} handleChange={handleChange} />}
    {mode === 'On date' && <EndOnDate onDate={onDate} handleChange={handleChange} />}

  </div>
);

End.propTypes = {
  end: PropTypes.shape({
    mode: PropTypes.string.isRequired,
    after: PropTypes.number.isRequired,
    onDate: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default End;
