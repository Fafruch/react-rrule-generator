import React from 'react';
import PropTypes from 'prop-types';
import RepeatMonthlyOn from './On';
import RepeatMonthlyOnThe from './OnThe';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

const RepeatMonthly = ({
  monthly: {
    mode,
    interval,
    on,
    onThe,
  },
  handleChange,
}) => (
  <div>
    every
    <input
      name="repeat.monthly.interval"
      className="form-control"
      value={interval}
      onChange={numericalFieldHandler(handleChange)}
    />
    month(s)

    <RepeatMonthlyOn mode={mode} on={on} handleChange={handleChange} />
    <RepeatMonthlyOnThe mode={mode} onThe={onThe} handleChange={handleChange} />

  </div>
);
RepeatMonthly.propTypes = {
  monthly: PropTypes.shape({
    mode: PropTypes.oneOf(['on', 'on the']).isRequired,
    interval: PropTypes.number.isRequired,
    on: PropTypes.object.isRequired,
    onThe: PropTypes.object.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatMonthly;
