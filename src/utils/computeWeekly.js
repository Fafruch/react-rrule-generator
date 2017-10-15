import RRule from 'rrule';
import _ from 'lodash';

const computeWeekly = ({ interval, days }) => ({
  freq: RRule.WEEKLY,
  interval,
  byweekday: _.values(days).reduce(
    (activeDays, isDayActive, dayIndex) =>
      (isDayActive ? [...activeDays, dayIndex] : activeDays),
    [],
  ),
});

export default computeWeekly;
