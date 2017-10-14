import RRule from 'rrule';
import moment from 'moment';
import _ from 'lodash';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const computeRRule = ({ repeat, end }) => {
  const rruleObject = {};

  switch (repeat.frequency) {
    case 'Yearly': {
      rruleObject.freq = RRule.YEARLY;

      if (repeat.yearly.mode === 'on') {
        months.forEach((month, monthIndex) => {
          if (month === repeat.yearly.on.month) rruleObject.bymonth = monthIndex + 1;
        });
        rruleObject.bymonthday = repeat.yearly.on.day;
      } else {
        switch (repeat.yearly.onThe.which) {
          case 'First':
            rruleObject.bysetpos = 1;
            break;
          case 'Second':
            rruleObject.bysetpos = 2;
            break;
          case 'Third':
            rruleObject.bysetpos = 3;
            break;
          case 'Fourth':
            rruleObject.bysetpos = 4;
            break;
          case 'Last':
            rruleObject.bysetpos = -1;
            break;
          default:
            break;
        }

        switch (repeat.yearly.onThe.day) {
          case 'Monday':
            rruleObject.byweekday = [0];
            break;
          case 'Tuesday':
            rruleObject.byweekday = [1];
            break;
          case 'Wednesday':
            rruleObject.byweekday = [2];
            break;
          case 'Thursday':
            rruleObject.byweekday = [3];
            break;
          case 'Friday':
            rruleObject.byweekday = [4];
            break;
          case 'Saturday':
            rruleObject.byweekday = [5];
            break;
          case 'Sunday':
            rruleObject.byweekday = [6];
            break;
          case 'Day':
            rruleObject.byweekday = [0, 1, 2, 3, 4, 5, 6];
            break;
          case 'Weekday':
            rruleObject.byweekday = [0, 1, 2, 3, 4];
            break;
          case 'Weekend day':
            rruleObject.byweekday = [5, 6];
            break;
          default:
            break;
        }

        months.forEach((month, monthIndex) => {
          if (month === repeat.yearly.onThe.month) rruleObject.bymonth = monthIndex + 1;
        });
      }

      break;
    }
    case 'Monthly': {
      rruleObject.freq = RRule.MONTHLY;
      rruleObject.interval = repeat.monthly.frequency;

      if (repeat.monthly.mode === 'on') {
        rruleObject.bymonthday = repeat.monthly.on.day;
      } else {
        switch (repeat.monthly.onThe.which) {
          case 'First':
            rruleObject.bysetpos = 1;
            break;
          case 'Second':
            rruleObject.bysetpos = 2;
            break;
          case 'Third':
            rruleObject.bysetpos = 3;
            break;
          case 'Fourth':
            rruleObject.bysetpos = 4;
            break;
          case 'Last':
            rruleObject.bysetpos = -1;
            break;
          default:
            break;
        }

        switch (repeat.monthly.onThe.day) {
          case 'Monday':
            rruleObject.byweekday = [0];
            break;
          case 'Tuesday':
            rruleObject.byweekday = [1];
            break;
          case 'Wednesday':
            rruleObject.byweekday = [2];
            break;
          case 'Thursday':
            rruleObject.byweekday = [3];
            break;
          case 'Friday':
            rruleObject.byweekday = [4];
            break;
          case 'Saturday':
            rruleObject.byweekday = [5];
            break;
          case 'Sunday':
            rruleObject.byweekday = [6];
            break;
          case 'Day':
            rruleObject.byweekday = [0, 1, 2, 3, 4, 5, 6];
            break;
          case 'Weekday':
            rruleObject.byweekday = [0, 1, 2, 3, 4];
            break;
          case 'Weekend day':
            rruleObject.byweekday = [5, 6];
            break;
          default:
            break;
        }
      }

      break;
    }
    case 'Weekly': {
      rruleObject.freq = RRule.WEEKLY;
      rruleObject.interval = repeat.weekly.frequency;

      const activeDays = [];
      _.values(repeat.weekly.days).forEach((isDayActive, dayIndex) => {
        // returns array of active days' indices
        if (isDayActive) activeDays.push(dayIndex);
      });
      rruleObject.byweekday = activeDays;

      break;
    }
    case 'Daily': {
      rruleObject.freq = RRule.DAILY;
      rruleObject.interval = repeat.daily.frequency;
      break;
    }
    case 'Hourly': {
      rruleObject.freq = RRule.HOURLY;
      rruleObject.interval = repeat.daily.frequency;
      break;
    }
    default:
      break;
  }

  if (end.mode === 'After') {
    rruleObject.count = end.after;
  }

  if (end.mode === 'On date') {
    rruleObject.until = moment(end.onDate).format();
  }

  const rrule = new RRule(rruleObject);
  return rrule.toString();
};

export default computeRRule;
