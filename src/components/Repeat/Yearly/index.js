import React from 'react';
import PropTypes from 'prop-types';
import RepeatYearlyOn from './On';
import RepeatYearlyOnThe from './OnThe';

const RepeatYearly = ({
  yearly: {
    mode,
    on,
    onThe,
  },
  handleChange,
}) => (
  <div>
    <RepeatYearlyOn mode={mode} on={on} handleChange={handleChange} />
    <RepeatYearlyOnThe mode={mode} onThe={onThe} handleChange={handleChange} />
  </div>
);
RepeatYearly.propTypes = {
  yearly: PropTypes.shape({
    mode: PropTypes.oneOf(['on', 'on the']).isRequired,
    on: PropTypes.object.isRequired,
    onThe: PropTypes.object.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatYearly;
