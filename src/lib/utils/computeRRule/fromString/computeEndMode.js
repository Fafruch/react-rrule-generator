const computeEndMode = (data, rruleObj) => {
  if (rruleObj.count) {
    return 'After';
  }

  if (rruleObj.until) {
    return 'On date';
  }

  return 'Never';
};

export default computeEndMode;
