import React from 'react';
import PropTypes from 'prop-types';
import RepeatYearly from './Yearly/index';
import RepeatMonthly from './Monthly/index';
import RepeatWeekly from './Weekly/index';
import RepeatDaily from './Daily/index';
import RepeatHourly from './Hourly/index';

const Repeat = ({
  repeat: {
    frequency,
    yearly,
    monthly,
    weekly,
    daily,
    hourly,
  },
  handleChange,
  config,
}) => {
  const isOptionAvailable = option => !config.frequency || config.frequency.indexOf(option) !== -1;
  const isOptionSelected = option => frequency === option;

  return (
    <div className="px-3">
      <div className="form-group row">
        <div className="col-sm-2 text-sm-right">
          <label
            htmlFor="Repeat frequency"
            className="col-form-label"
          >
            <strong>
              Repeat
            </strong>
          </label>
        </div>
        <div className="col-sm-6">
          <select
            name="repeat.frequency"
            id="Repeat frequency"
            className="form-control"
            value={frequency}
            onChange={handleChange}
          >
            {isOptionAvailable('Yearly') && <option value="Yearly">Yearly</option>}
            {isOptionAvailable('Monthly') && <option value="Monthly">Monthly</option>}
            {isOptionAvailable('Weekly') && <option value="Weekly">Weekly</option>}
            {isOptionAvailable('Daily') && <option value="Daily">Daily</option>}
            {isOptionAvailable('Hourly') && <option value="Hourly">Hourly</option>}
          </select>
        </div>
      </div>

      {isOptionSelected('Yearly') && <RepeatYearly yearly={yearly} handleChange={handleChange} config={config} />}
      {isOptionSelected('Monthly') && <RepeatMonthly monthly={monthly} handleChange={handleChange} config={config} />}
      {isOptionSelected('Weekly') && <RepeatWeekly weekly={weekly} handleChange={handleChange} />}
      {isOptionSelected('Daily') && <RepeatDaily daily={daily} handleChange={handleChange} />}
      {isOptionSelected('Hourly') && <RepeatHourly hourly={hourly} handleChange={handleChange} />}

    </div>
  );
};

Repeat.propTypes = {
  repeat: PropTypes.shape({
    frequency: PropTypes.oneOf(['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly']).isRequired,
    yearly: PropTypes.object.isRequired,
    monthly: PropTypes.object.isRequired,
    weekly: PropTypes.object.isRequired,
    daily: PropTypes.object.isRequired,
    hourly: PropTypes.object.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  config: PropTypes.shape({
    frequency: PropTypes.arrayOf(PropTypes.oneOf(['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly'])),
    yearly: PropTypes.oneOf(['on', 'on the']),
    monthly: PropTypes.oneOf(['on', 'on the']),
  }).isRequired,
};

export default Repeat;
