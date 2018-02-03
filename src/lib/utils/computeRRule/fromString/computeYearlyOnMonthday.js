const computeYearlyOnMonthday = (data, rruleObj) => {
  if (rruleObj.freq !== 0 || !rruleObj.bymonthday) {
    return data.repeat.yearly.on.day;
  }

  return rruleObj.bymonthday[0];
};

export default computeYearlyOnMonthday;
