import React from 'react';
import PropTypes from 'prop-types';
import RepeatYearly from './RepeatYearly';
import RepeatMonthly from './RepeatMonthly';
import RepeatWeekly from './RepeatWeekly';
import RepeatDaily from './RepeatDaily';
import RepeatHourly from './RepeatHourly';

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
}) => (
  <div>
    <h2>Repeat</h2>
    <select
      name="repeat.frequency"
      className="form-control"
      value={frequency}
      onChange={event => handleChange(event)}
    >
      <option value="Yearly">Yearly</option>
      <option value="Monthly">Monthly</option>
      <option value="Weekly">Weekly</option>
      <option value="Daily">Daily</option>
      <option value="Hourly">Hourly</option>
    </select>

    {frequency === 'Yearly' && <RepeatYearly yearly={yearly} handleChange={handleChange} />}
    {frequency === 'Monthly' && <RepeatMonthly monthly={monthly} handleChange={handleChange} />}
    {frequency === 'Weekly' && <RepeatWeekly weekly={weekly} handleChange={handleChange} />}
    {frequency === 'Daily' && <RepeatDaily daily={daily} handleChange={handleChange} />}
    {frequency === 'Hourly' && <RepeatHourly hourly={hourly} handleChange={handleChange} />}

  </div>
);

Repeat.propTypes = {
  repeat: PropTypes.shape({
    yearly: PropTypes.object.isRequired,
    monthly: PropTypes.object.isRequired,
    weekly: PropTypes.object.isRequired,
    daily: PropTypes.object.isRequired,
    hourly: PropTypes.object.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Repeat;
