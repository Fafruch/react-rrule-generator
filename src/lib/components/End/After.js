import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../utils/numericalFieldHandler';

const EndAfter = ({
  after,
  handleChange,
}) => (
  <div className="col-sm-6">
    <div className="form-group m-0 row d-flex align-items-center">
      <div className="col-3 col-sm-4 pl-0">
        <input
          name="end.after"
          aria-label="End after"
          className="form-control"
          value={after}
          onChange={numericalFieldHandler(handleChange)}
        />
      </div>
      <div className="col-1 col-sm-8">
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
