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
  config,
}) => {
  const isTheOnlyOneMode = option => config.yearly === option;
  const isOptionAvailable = option => !config.yearly || isTheOnlyOneMode(option);
  return (
    <div>
      {isOptionAvailable('on') && (
        <RepeatYearlyOn
          mode={mode}
          on={on}
          isNotTheOnlyOneMode={!isTheOnlyOneMode('on')}
          handleChange={handleChange}
        />
      )}
      {isOptionAvailable('on the') && (
        <RepeatYearlyOnThe
          mode={mode}
          onThe={onThe}
          isNotTheOnlyOneMode={!isTheOnlyOneMode('on the')}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};
RepeatYearly.propTypes = {
  yearly: PropTypes.shape({
    mode: PropTypes.oneOf(['on', 'on the']).isRequired,
    on: PropTypes.object.isRequired,
    onThe: PropTypes.object.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  config: PropTypes.shape({
    yearly: PropTypes.oneOf(['on', 'on the']),
  }).isRequired,
};

export default RepeatYearly;
