import RRule from 'rrule';
import _ from 'lodash';

const computeWeekly = ({ frequency, days }) => {
  const repeat = {
    freq: RRule.WEEKLY,
    interval: frequency,
  };

  const activeDays = [];
  _.values(days).forEach((isDayActive, dayIndex) => {
    // returns array of active days' indices
    if (isDayActive) activeDays.push(dayIndex);
  });
  repeat.byweekday = activeDays;

  return repeat;
};

export default computeWeekly;
