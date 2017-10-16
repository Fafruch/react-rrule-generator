import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../utils/numericalFieldHandler';

const EndAfter = ({
  after,
  handleChange,
}) => (
  <div>
    <input
      name="end.after"
      className="form-control"
      value={after}
      onChange={numericalFieldHandler(handleChange)}
    />
    executions.
  </div>
);

EndAfter.propTypes = {
  after: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EndAfter;
