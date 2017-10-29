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
  config,
}) => {
  const isTheOnlyOneMode = option => config.monthly === option;
  const isOptionAvailable = option => !config.monthly || isTheOnlyOneMode(option);

  return (
    <div>
      <div className="form-group row d-flex align-items-sm-center">
        <div className="col-sm-1 offset-sm-2">
          every
        </div>
        <div className="col-sm-3">
          <input
            name="repeat.monthly.interval"
            aria-label="Repeat monthly interval"
            className="form-control"
            value={interval}
            onChange={numericalFieldHandler(handleChange)}
          />
        </div>
        <div className="col-sm-1">
          month(s)
        </div>
      </div>

      {isOptionAvailable('on') && (
        <RepeatMonthlyOn
          mode={mode}
          on={on}
          isNotTheOnlyOneMode={!isTheOnlyOneMode('on')}
          handleChange={handleChange}
        />
      )}
      {isOptionAvailable('on the') && (
        <RepeatMonthlyOnThe
          mode={mode}
          onThe={onThe}
          isNotTheOnlyOneMode={!isTheOnlyOneMode('on the')}
          handleChange={handleChange}
        />
      )}

    </div>
  );
};

RepeatMonthly.propTypes = {
  monthly: PropTypes.shape({
    mode: PropTypes.oneOf(['on', 'on the']).isRequired,
    interval: PropTypes.number.isRequired,
    on: PropTypes.object.isRequired,
    onThe: PropTypes.object.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  config: PropTypes.shape({
    monthly: PropTypes.oneOf(['on', 'on the']),
  }).isRequired,
};

export default RepeatMonthly;
