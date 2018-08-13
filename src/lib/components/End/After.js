import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../utils/numericalFieldHandler';

const EndAfter = ({
  id,
  after,
  handleChange,
}) => (
  <div className="col-sm-4">
    <div className="form-group m-0 row d-flex align-items-center">
      <div className="col-3 col-sm-6 pl-0">
        <input
          id={id}
          name="end.after"
          aria-label="End after"
          className="form-control"
          value={after}
          onChange={numericalFieldHandler(handleChange)}
        />
      </div>
      <div className="col-9 col-sm-6">
        executions.
      </div>
    </div>
  </div>
);

EndAfter.propTypes = {
  id: PropTypes.string.isRequired,
  after: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EndAfter;
