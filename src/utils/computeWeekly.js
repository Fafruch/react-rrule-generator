import RRule from 'rrule';
import _ from 'lodash';

const computeWeekly = ({ interval, days }) => {
  const repeat = {
    freq: RRule.WEEKLY,
    interval,
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
