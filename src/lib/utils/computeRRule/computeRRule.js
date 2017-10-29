import RRule from 'rrule';
import { assign } from 'lodash';

import computeRepeat from './computeRepeat';
import computeEnd from './computeEnd';

const computeRRule = ({ repeat, end }) => {
  const repeatObject = computeRepeat(repeat);
  const endObject = computeEnd(end);

  const rruleObject = assign({}, repeatObject, endObject);
  const rrule = new RRule(rruleObject);
  return rrule.toString();
};

export default computeRRule;
