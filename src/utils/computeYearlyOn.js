const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const computeYearlyOn = on => ({
  bymonth: months.indexOf(on.month) + 1,
  bymonthday: on.day,
});

export default computeYearlyOn;
