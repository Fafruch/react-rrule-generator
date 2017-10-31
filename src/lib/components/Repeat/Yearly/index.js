import React from 'react';
import PropTypes from 'prop-types';
import RepeatYearlyOn from './On';
import RepeatYearlyOnThe from './OnThe';

const RepeatYearly = ({
  yearly: {
    mode,
    on,
    onThe,
    options,
  },
  handleChange,
}) => {
  const isTheOnlyOneMode = option => options.modes === option;
  const isOptionAvailable = option => !options.modes || isTheOnlyOneMode(option);
  return (
    <div>
      {isOptionAvailable('on') && (
        <RepeatYearlyOn
          mode={mode}
          on={on}
          hasMoreModes={!isTheOnlyOneMode('on')}
          handleChange={handleChange}
        />
      )}
      {isOptionAvailable('on the') && (
        <RepeatYearlyOnThe
          mode={mode}
          onThe={onThe}
          hasMoreModes={!isTheOnlyOneMode('on the')}
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
    options: PropTypes.shape({
      modes: PropTypes.oneOf(['on', 'on the']),
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatYearly;
