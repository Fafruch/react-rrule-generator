const computeEndAfter = (data, rruleObj) => {
  if (!rruleObj.count) {
    return data.end.after;
  }

  return rruleObj.count;
};

export default computeEndAfter;
