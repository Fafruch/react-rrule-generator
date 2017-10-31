import RRule from 'rrule';

const computeOptions = ({ weekStartsOnSunday }) => {
  const options = {};

  if (weekStartsOnSunday) {
    options.wkst = RRule.SU;
  }

  return options;
};

export default computeOptions;
