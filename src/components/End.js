import React from 'react';
import PropTypes from 'prop-types';

const End = ({ end, endDate, handleChange }) => (
  <div>

    <form>
      <select
        className="form-control"
        value={end}
        onChange={event => handleChange('end', event.target.value)}
      >
        <option value="never">Never</option>
        <option value="after">After</option>
        <option value="onDate">On date</option>
      </select>
    </form>

    <form>
      <input
        className="form-control"
        value={endDate}
        onChange={event => handleChange('endDate', event.target.value)}
      />
    </form>

  </div>
);

End.propTypes = {
  end: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default End;
