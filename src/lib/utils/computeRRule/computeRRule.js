import RRule from 'rrule';

import computeRepeat from './computeRepeat';
import computeEnd from './computeEnd';
import computeOptions from './computeOptions';

const computeRRule = ({ repeat, end, options }) => {
  const rruleObject = { ...computeRepeat(repeat), ...computeEnd(end), ...computeOptions(options) };
  const rrule = new RRule(rruleObject);
  return rrule.toString();
};

export default computeRRule;
