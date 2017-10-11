import React from 'react';
import PropTypes from 'prop-types';
import RepeatYearly from './RepeatYearly';
import RepeatMonthly from './RepeatMonthly';
import RepeatWeekly from './RepeatWeekly';
import RepeatDaily from './RepeatDaily';
import RepeatHourly from './RepeatHourly';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
  'Day', 'Weekday', 'Weekend day'];

const Repeat = ({
  repeatFrequency,
  repeatYearlyMode,
  repeatYearlyOnMonth,
  repeatYearlyOnDay,
  repeatYearlyOnTheMonth,
  repeatYearlyOnTheDay,
  repeatYearlyOnTheWhich,
  repeatMonthlyMode,
  repeatMonthlyFrequency,
  repeatMonthlyOnDay,
  repeatMonthlyOnTheDay,
  repeatMonthlyOnTheWhich,
  repeatWeeklyFrequency,
  repeatWeeklyDays,
  repeatDailyFrequency,
  repeatHourlyFrequency,
  handleChange,
}) => (
  <div>
    <h2>Repeat</h2>

    <select
      name="repeatFrequency"
      className="form-control"
      value={repeatFrequency}
      onChange={event => handleChange('repeatFrequency', event.target.value)}
    >
      <option value="Yearly">Yearly</option>
      <option value="Monthly">Monthly</option>
      <option value="Weekly">Weekly</option>
      <option value="Daily">Daily</option>
      <option value="Hourly">Hourly</option>
    </select>

    {
      repeatFrequency === 'Yearly' &&
      <RepeatYearly
        repeatYearlyMode={repeatYearlyMode}
        repeatYearlyOnMonth={repeatYearlyOnMonth}
        repeatYearlyOnDay={repeatYearlyOnDay}
        repeatYearlyOnTheMonth={repeatYearlyOnTheMonth}
        repeatYearlyOnTheDay={repeatYearlyOnTheDay}
        repeatYearlyOnTheWhich={repeatYearlyOnTheWhich}
        handleChange={handleChange}
      />
    }

    {
      repeatFrequency === 'Monthly' &&
      <RepeatMonthly
        repeatMonthlyMode={repeatMonthlyMode}
        repeatMonthlyFrequency={repeatMonthlyFrequency}
        repeatMonthlyOnDay={repeatMonthlyOnDay}
        repeatMonthlyOnTheDay={repeatMonthlyOnTheDay}
        repeatMonthlyOnTheWhich={repeatMonthlyOnTheWhich}
        handleChange={handleChange}
      />
    }

    {
      repeatFrequency === 'Weekly' &&
      <RepeatWeekly
        repeatWeeklyFrequency={repeatWeeklyFrequency}
        repeatWeeklyDays={repeatWeeklyDays}
        handleChange={handleChange}
      />
    }

    {
      repeatFrequency === 'Daily' &&
      <RepeatDaily
        repeatDailyFrequency={repeatDailyFrequency}
        handleChange={handleChange}
      />
    }

    {
      repeatFrequency === 'Hourly' &&
      <RepeatHourly
        repeatHourlyFrequency={repeatHourlyFrequency}
        handleChange={handleChange}
      />
    }

  </div>
);

Repeat.propTypes = {
  repeatFrequency: PropTypes.oneOf(['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly']).isRequired,
  repeatYearlyMode: PropTypes.oneOf(['on', 'on the']).isRequired,
  repeatYearlyOnMonth: PropTypes.oneOf(months).isRequired,
  repeatYearlyOnDay: PropTypes.number.isRequired,
  repeatYearlyOnTheMonth: PropTypes.oneOf(months).isRequired,
  repeatYearlyOnTheDay: PropTypes.oneOf(days).isRequired,
  repeatYearlyOnTheWhich: PropTypes.oneOf(['First', 'Second', 'Third', 'Fourth', 'Last']).isRequired,
  repeatMonthlyMode: PropTypes.oneOf(['on day, on the']).isRequired,
  repeatMonthlyFrequency: PropTypes.number.isRequired,
  repeatMonthlyOnDay: PropTypes.number.isRequired,
  repeatMonthlyOnTheDay: PropTypes.oneOf(days).isRequired,
  repeatMonthlyOnTheWhich: PropTypes.oneOf(['First', 'Second', 'Third', 'Fourth', 'Last']).isRequired,
  repeatWeeklyFrequency: PropTypes.number.isRequired,
  repeatWeeklyDays: PropTypes.shape({
    mon: PropTypes.bool.isRequired,
    tue: PropTypes.bool.isRequired,
    wed: PropTypes.bool.isRequired,
    thu: PropTypes.bool.isRequired,
    fri: PropTypes.bool.isRequired,
    sat: PropTypes.bool.isRequired,
    sun: PropTypes.bool.isRequired,
  }).isRequired,
  repeatDailyFrequency: PropTypes.number.isRequired,
  repeatHourlyFrequency: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Repeat;
