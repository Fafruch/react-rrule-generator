import React from 'react';
import PropTypes from 'prop-types';
import EndAfter from './After';
import EndOnDate from './OnDate';

const End = ({
  end: {
    mode,
    after,
    onDate,
  },
  handleChange,
  config,
}) => {
  const isOptionAvailable = option => !config.end || config.end.indexOf(option) !== -1;
  const isOptionSelected = option => mode === option;

  return (
    <div className="px-3">
      <div className="form-group row">
        <div className="col-sm-2 text-sm-right">
          <label
            htmlFor="End"
            className="col-form-label"
          >
            <strong>
              End
            </strong>
          </label>
        </div>
        <div className="col-sm-3">
          <select
            name="end.mode"
            id="End"
            className="form-control"
            value={mode}
            onChange={event => handleChange(event)}
          >
            {isOptionAvailable('Never') && <option value="Never">Never</option>}
            {isOptionAvailable('After') && <option value="After">After</option>}
            {isOptionAvailable('On date') && <option value="On date">On date</option>}
          </select>
        </div>

        {isOptionSelected('After') && <EndAfter after={after} handleChange={handleChange} />}
        {isOptionSelected('On date') && <EndOnDate onDate={onDate} handleChange={handleChange} config={config} />}

      </div>
    </div>
  );
};

End.propTypes = {
  end: PropTypes.shape({
    mode: PropTypes.string.isRequired,
    after: PropTypes.number.isRequired,
    onDate: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  config: PropTypes.shape({
    end: PropTypes.arrayOf(PropTypes.oneOf(['Never', 'After', 'On date'])),
    calendarFirstDayOfAWeek: PropTypes.oneOf(['Mon', 'Sun']),
  }).isRequired,
};

export default End;
