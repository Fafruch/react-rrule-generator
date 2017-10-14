import RRule from 'rrule';
import _ from 'lodash';

import computeYearly from './computeYearly';
import computeMonthly from './computeMonthly';
import computeWeekly from './computeWeekly';
import computeDaily from './computeDaily';
import computeHourly from './computeHourly';
import computeEnd from './computeEnd';

const computeRRule = ({ repeat, end }) => {
  let repeatObject = {};
  switch (repeat.frequency) {
    case 'Yearly': {
      repeatObject = computeYearly(repeat.yearly);
      break;
    }
    case 'Monthly': {
      repeatObject = computeMonthly(repeat.monthly);
      break;
    }
    case 'Weekly': {
      repeatObject = computeWeekly(repeat.weekly);
      break;
    }
    case 'Daily': {
      repeatObject = computeDaily(repeat.daily);
      break;
    }
    case 'Hourly': {
      repeatObject = computeHourly(repeat.hourly);
      break;
    }
    default:
      break;
  }

  const endObject = computeEnd(end);

  const rruleObject = _.assign({}, repeatObject, endObject);
  const rrule = new RRule(rruleObject);
  return rrule.toString();
};

export default computeRRule;
