import RRule from 'rrule';

const computeDaily = ({ frequency }) => ({
  freq: RRule.DAILY,
  interval: frequency,
});

export default computeDaily;
