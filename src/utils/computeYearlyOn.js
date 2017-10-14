const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const computeYearlyOn = (on) => {
  const repeat = {};

  months.forEach((month, monthIndex) => {
    if (month === on.month) {
      repeat.bymonth = monthIndex + 1;
    }
  });
  repeat.bymonthday = on.day;

  return repeat;
};

export default computeYearlyOn;
