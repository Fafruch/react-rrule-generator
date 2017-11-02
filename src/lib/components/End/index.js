import React from 'react';
import PropTypes from 'prop-types';
import EndAfter from './After';
import EndOnDate from './OnDate';

const End = ({
  end: {
    mode,
    after,
    onDate,
    options,
  },
  calendarComponent,
  handleChange,
}) => {
  const isOptionAvailable = option => !options.modes || options.modes.indexOf(option) !== -1;
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
            onChange={handleChange}
          >
            {isOptionAvailable('Never') && <option value="Never">Never</option>}
            {isOptionAvailable('After') && <option value="After">After</option>}
            {isOptionAvailable('On date') && <option value="On date">On date</option>}
          </select>
        </div>

        {isOptionSelected('After') && <EndAfter after={after} handleChange={handleChange} />}
        {isOptionSelected('On date') && (
          <EndOnDate onDate={onDate} handleChange={handleChange} calendarComponent={calendarComponent} />
        )}

      </div>
    </div>
  );
};

End.propTypes = {
  end: PropTypes.shape({
    mode: PropTypes.string.isRequired,
    after: PropTypes.number.isRequired,
    onDate: PropTypes.object.isRequired,
    options: PropTypes.shape({
      modes: PropTypes.arrayOf(PropTypes.oneOf(['Never', 'After', 'On date'])),
      weekStartsOnSunday: PropTypes.bool,
    }).isRequired,
  }).isRequired,
  calendarComponent: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default End;
