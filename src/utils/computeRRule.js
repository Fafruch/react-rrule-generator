import RRule from 'rrule';
import moment from 'moment';

const computeRRule = ({
  repeatFrequency,
  repeatMode,
  onMonth,
  onDay,
  onTheWhich,
  onTheDay,
  onTheMonth,
  endMode,
  endAfter,
  endOnDate,
}) => {
  const rruleObject = {};

  if (endMode === 'After') {
    rruleObject.count = endAfter;
  }

  if (endMode === 'On date') {
    rruleObject.until = moment(endOnDate).format();
  }

  const rrule = new RRule(rruleObject);
  return rrule.toString();
};

export default computeRRule;
