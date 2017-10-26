import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import numericalFieldHandler from '../../../utils/numericalFieldHandler';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const RepeatYearlyOn = ({
  mode,
  on,
  handleChange,
}) => {
  const daysInMonth = moment(on.month, 'MMM').daysInMonth();
  const isActive = mode === 'on';

  return (
    <div className="form-group row d-flex align-items-sm-center">
      <div className="col-sm-1 offset-sm-2">
        <input
          type="radio"
          name="repeat.yearly.mode"
          aria-label="Repeat yearly on"
          className="form-control"
          value="on"
          checked={isActive}
          onChange={handleChange}
        />
      </div>

      <div className="col-sm-1">
        on
      </div>

      <div className="col-sm-2">
        <select
          name="repeat.yearly.on.month"
          aria-label="Repeat yearly on month"
          className="form-control"
          value={on.month}
          disabled={!isActive}
          onChange={handleChange}
        >
          {months.map(month => <option key={month} value={month}>{month}</option>)}
        </select>
      </div>

      <div className="col-sm-2">
        <select
          name="repeat.yearly.on.day"
          aria-label="Repeat yearly on a day"
          className="form-control"
          value={on.day}
          disabled={!isActive}
          onChange={numericalFieldHandler(handleChange)}
        >
          {[...new Array(daysInMonth)].map((day, i) => (
            <option key={i} value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
RepeatYearlyOn.propTypes = {
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  on: PropTypes.shape({
    month: PropTypes.oneOf(months).isRequired,
    day: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatYearlyOn;
