const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const computeYearlyOn = on => ({
  bymonth: months.reduce(
    (lastMonth, month, monthIndex) =>
      (month === on.month ? monthIndex + 1 : lastMonth),
    1,
  ),
  bymonthday: on.day,
});

export default computeYearlyOn;
