import RRule from 'rrule';

const computeDaily = ({ interval }) => ({
  freq: RRule.DAILY,
  interval: interval,
});

export default computeDaily;
