import { RRule } from 'rrule';

const computeMonthlyOnThe = (onThe) => {
  const repeat = {};

  let bysetpos;
  switch (onThe.which) {
    case 'First':
      bysetpos = 1;
      break;
    case 'Second':
      bysetpos = 2;
      break;
    case 'Third':
      bysetpos = 3;
      break;
    case 'Fourth':
      bysetpos = 4;
      break;
    case 'Last':
      bysetpos = -1;
      break;
    default:
      break;
  }

  switch (onThe.day) {
    case 'Monday':
      repeat.byweekday = [RRule.MO.nth(bysetpos)];
      break;
    case 'Tuesday':
      repeat.byweekday = [RRule.TU.nth(bysetpos)];
      break;
    case 'Wednesday':
      repeat.byweekday = [RRule.WE.nth(bysetpos)];
      break;
    case 'Thursday':
      repeat.byweekday = [RRule.TH.nth(bysetpos)];
      break;
    case 'Friday':
      repeat.byweekday = [RRule.FR.nth(bysetpos)];
      break;
    case 'Saturday':
      repeat.byweekday = [RRule.SA.nth(bysetpos)];
      break;
    case 'Sunday':
      repeat.byweekday = [RRule.SU.nth(bysetpos)];
      break;
    case 'Day':
      repeat.bymonthday = bysetpos;
      break;
    case 'Weekday':
      repeat.byweekday = [0, 1, 2, 3, 4];
      repeat.bysetpos = bysetpos;
      break;
    case 'Weekend day':
      repeat.byweekday = [5, 6];
      repeat.bysetpos = bysetpos;
      break;
    default:
      break;
  }

  return repeat;
};

export default computeMonthlyOnThe;
