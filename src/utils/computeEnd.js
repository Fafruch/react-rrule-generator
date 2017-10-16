import moment from 'moment';

const computeEnd = ({ mode, after, onDate }) => {
  const end = {};

  if (mode === 'After') {
    end.count = after;
  }

  if (mode === 'On date') {
    end.until = moment(onDate).format();
  }

  return end;
};

export default computeEnd;
