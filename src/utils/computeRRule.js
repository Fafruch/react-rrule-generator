import RRule from 'rrule';
import moment from 'moment';
import _ from 'lodash';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const computeRRule = ({
  repeatFrequency,
  repeatYearlyMode,
  repeatYearlyOnMonth,
  repeatYearlyOnDay,
  repeatYearlyOnTheMonth,
  repeatYearlyOnTheDay,
  repeatYearlyOnTheWhich,
  repeatMonthlyMode,
  repeatMonthlyFrequency,
  repeatMonthlyOnDay,
  repeatMonthlyOnTheDay,
  repeatMonthlyOnTheWhich,
  repeatWeeklyFrequency,
  repeatWeeklyDays,
  repeatDailyFrequency,
  repeatHourlyFrequency,
  endMode,
  endAfter,
  endOnDate,
}) => {
  const rruleObject = {};

  switch (repeatFrequency) {
    case 'Yearly': {
      rruleObject.freq = RRule.YEARLY;

      if (repeatYearlyMode === 'on') {
        months.forEach((month, monthIndex) => {
          if (month === repeatYearlyOnMonth) rruleObject.bymonth = monthIndex + 1;
        });
        rruleObject.bymonthday = repeatYearlyOnDay;
      } else {
        switch (repeatYearlyOnTheWhich) {
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

        switch (repeatYearlyOnTheDay) {
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
          if (month === repeatYearlyOnTheMonth) rruleObject.bymonth = monthIndex + 1;
        });
      }

      break;
    }
    case 'Monthly': {
      rruleObject.freq = RRule.MONTHLY;
      rruleObject.interval = repeatMonthlyFrequency;

      if (repeatMonthlyMode === 'on day') {
        rruleObject.bymonthday = repeatMonthlyOnDay;
      } else {
        switch (repeatMonthlyOnTheWhich) {
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

        switch (repeatMonthlyOnTheDay) {
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
      rruleObject.interval = repeatWeeklyFrequency;

      const activeDays = [];
      _.values(repeatWeeklyDays).forEach((isDayActive, dayIndex) => {
        if (isDayActive) activeDays.push(dayIndex);
      });
      rruleObject.byweekday = activeDays;

      break;
    }
    case 'Daily': {
      rruleObject.freq = RRule.DAILY;
      rruleObject.interval = repeatDailyFrequency;
      break;
    }
    case 'Hourly': {
      rruleObject.freq = RRule.HOURLY;
      rruleObject.interval = repeatHourlyFrequency;
      break;
    }
    default:
      break;
  }


  if (endMode === 'After') {
    rruleObject.count = endAfter;
  }

  if (endMode === 'On date') {
    rruleObject.until = moment(endOnDate).format();
  }

  const rrule = new RRule(rruleObject);
  return rrule.toString();
};

export default computeRRule;
