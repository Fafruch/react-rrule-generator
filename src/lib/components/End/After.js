import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../utils/numericalFieldHandler';

const EndAfter = ({
  after,
  handleChange,
}) => (
  <div className="col-sm-4">
    <div className="form-group m-0 row d-flex align-items-sm-center">
      <div className="col-6">
        <input
          name="end.after"
          className="form-control"
          value={after}
          onChange={numericalFieldHandler(handleChange)}
        />
      </div>
      <div className="col-6">
        executions.
      </div>
    </div>
  </div>
);

EndAfter.propTypes = {
  after: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EndAfter;
