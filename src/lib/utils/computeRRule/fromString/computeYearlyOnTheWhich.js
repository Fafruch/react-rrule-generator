const computeYearlyOnTheWhich = (data, rruleObj) => {
  if (rruleObj.freq !== 0 || !rruleObj.byweekday) {
    return data.repeat.yearly.onThe.which;
  }

  switch (rruleObj.bysetpos[0]) {
    case 1: {
      return 'First';
    }
    case 2: {
      return 'Second';
    }
    case 3: {
      return 'Third';
    }
    case 4: {
      return 'Fourth';
    }
    case -1: {
      return 'Last';
    }
    default: {
      return data.repeat.yearly.onThe.which;
    }
  }
};

export default computeYearlyOnTheWhich;
