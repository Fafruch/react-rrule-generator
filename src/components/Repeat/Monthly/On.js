import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

const RepeatMonthlyOn = ({
  mode,
  on,
  handleChange,
}) => (
  <div>
    <input
      type="radio"
      name="repeat.monthly.mode"
      className="form-control"
      value="on"
      checked={mode === 'on'}
      onChange={handleChange}
    />
    on day

    <select
      name="repeat.monthly.on.day"
      className="form-control"
      value={on.day}
      onChange={numericalFieldHandler(handleChange)}
    >
      {[...new Array(31)].map((day, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
    </select>
  </div>
);
RepeatMonthlyOn.propTypes = {
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  on: PropTypes.shape({
    day: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatMonthlyOn;
