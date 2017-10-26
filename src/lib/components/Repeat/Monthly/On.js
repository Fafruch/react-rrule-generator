import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

const RepeatMonthlyOn = ({
  mode,
  on,
  handleChange,
}) => {
  const isActive = mode === 'on';

  return (
    <div className="form-group row d-flex align-items-sm-center">
      <div className="col-sm-1 offset-sm-2">
        <input
          type="radio"
          name="repeat.monthly.mode"
          aria-label="Repeat monthly on"
          className="form-control"
          value="on"
          checked={isActive}
          onChange={handleChange}
        />
      </div>
      <div className="col-sm-1">
        on day
      </div>

      <div className="col-sm-2">
        <select
          name="repeat.monthly.on.day"
          aria-label="Repeat monthly on a day"
          className="form-control"
          value={on.day}
          disabled={!isActive}
          onChange={numericalFieldHandler(handleChange)}
        >
          {[...new Array(31)].map((day, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
        </select>
      </div>
    </div>
  );
};
RepeatMonthlyOn.propTypes = {
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  on: PropTypes.shape({
    day: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatMonthlyOn;
