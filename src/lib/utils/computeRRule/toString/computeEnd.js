import moment from 'moment';

const computeEnd = ({ mode, after, onDate: { date } }) => {
  const end = {};

  if (mode === 'After') {
    end.count = after;
  }

  if (mode === 'On date') {
    end.until = moment( date ).
      hours( 12 ).
      minutes( 0 ).
      seconds( 0 ).
      milliseconds( 0 ).
      format();
  }

  return end;
};

export default computeEnd;
