import RRule from 'rrule';
import moment from 'moment';

const computeRRule = ({
  repeatFrequency,
  repeatMode,
  onMonth,
  onDay,
  onThe,
  onTheDay,
  onTheMonth,
  end,
  endAfter,
  endOnDate,
}) => {
  const rruleObject = {};

  if (end === 'After') {
    rruleObject.count = endAfter;
  }

  if (end === 'On date') {
    rruleObject.until = moment(endOnDate).format();
  }

  const rrule = new RRule(rruleObject);
  return rrule.toString();
};

export default computeRRule;
