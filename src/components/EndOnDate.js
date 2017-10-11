import React from 'react';
import PropTypes from 'prop-types';

const EndOnDate = ({
  endOnDate,
  handleChange,
}) => (
  <input
    className="form-control"
    value={endOnDate}
    onChange={event => handleChange('endOnDate', event.target.value)}
  />
);

EndOnDate.propTypes = {
  endOnDate: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EndOnDate;
