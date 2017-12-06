import { MONTHS } from '../../../constants/index';

const computeYearlyOnTheMonth = (data, rruleObj) => {
  if (rruleObj.freq !== 0 || !rruleObj.byweekday) {
    return data.repeat.yearly.onThe.month;
  }

  return MONTHS[rruleObj.bymonth[0] - 1];
};

export default computeYearlyOnTheMonth;
