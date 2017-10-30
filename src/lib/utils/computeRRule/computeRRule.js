import RRule from 'rrule';

import computeRepeat from './computeRepeat';
import computeEnd from './computeEnd';

const computeRRule = ({ repeat, end }) => {
  const repeatObject = computeRepeat(repeat);
  const endObject = computeEnd(end);

  const rruleObject = { ...repeatObject, ...endObject };
  const rrule = new RRule(rruleObject);
  return rrule.toString();
};

export default computeRRule;
