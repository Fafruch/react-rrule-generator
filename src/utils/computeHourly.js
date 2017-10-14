import RRule from 'rrule';

const computeHourly = ({ frequency }) => ({
  freq: RRule.HOURLY,
  interval: frequency,
});

export default computeHourly;
