import moment from 'moment';

const computeStart = ({ onDate: { date } }) => {
  // verify that incoming date is valid
  // by seeing if it can be converted into a moment object.
  // if not, then create a new date
  if (!moment.isMoment(moment(date))) {
    date = new Date();
  }

  return {
    dtstart: moment( date ).
      hours( 12 ).
      minutes( 0 ).
      seconds( 0 ).
      milliseconds( 0 ).
      toDate()
  };
};

export default computeStart;
