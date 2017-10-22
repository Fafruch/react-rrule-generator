import React from 'react';
import PropTypes from 'prop-types';
import { toPairs } from 'lodash';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

const RepeatWeekly = ({
  weekly: {
    interval,
    days,
  },
  handleChange,
}) => (
  <div className="px-3">
    <div className="form-group row d-flex align-items-sm-center">
      <div className="col-sm-1 offset-sm-2">
        every
      </div>
      <div className="col-sm-3">
        <input
          name="repeat.weekly.interval"
          className="form-control"
          value={interval}
          onChange={numericalFieldHandler(handleChange)}
        />
      </div>
      <div className="col-sm-1">
        week(s)
      </div>
    </div>

    <div className="form-group row">
      <div className="btn-group offset-sm-2" data-toggle="buttons">
        {toPairs(days).map(([dayName, isDayActive]) => (
          <label key={dayName} className={`btn btn-primary ${isDayActive && 'active'}`}>
            <input
              type="checkbox"
              name={`repeat.weekly.days[${dayName}]`}
              className="form-control"
              checked={isDayActive}
              onChange={(event) => {
                const editedEvent = {
                  ...event,
                  target: {
                    ...event.target,
                    value: !isDayActive,
                    name: event.target.name,
                  },
                };

                handleChange(editedEvent);
              }}
            />
            {dayName}
          </label>))
        }
      </div>
    </div>
  </div>
);
RepeatWeekly.propTypes = {
  weekly: PropTypes.shape({
    interval: PropTypes.number.isRequired,
    days: PropTypes.shape({
      mon: PropTypes.bool.isRequired,
      tue: PropTypes.bool.isRequired,
      wed: PropTypes.bool.isRequired,
      thu: PropTypes.bool.isRequired,
      fri: PropTypes.bool.isRequired,
      sat: PropTypes.bool.isRequired,
      sun: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatWeekly;
