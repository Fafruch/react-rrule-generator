import RRule from 'rrule';

import computeYearlyOn from './computeYearlyOn';
import computeYearlyOnThe from './computeYearlyOnThe';

const computeYearly = ({ mode, on, onThe }) => ({
  freq: RRule.YEARLY,
  ...(mode === 'on' ? computeYearlyOn(on) : computeYearlyOnThe(onThe)),
});

export default computeYearly;

/*
const spzinak = {
  end: {
    mode: configureEnd(),
    after: 1,
    onDate: moment().format(DATE_TIME_FORMAT),
    options: {
      never: config.hasOwnProperty('never') ? config.never : true,
      after: config.hasOwnProperty('after') ? config.after : true,
      onDate: config.hasOwnProperty('onDate') ? config.onDate : true,
    }
  },
}


const spzinak = {
  end: {
    never: true,
    onDate: true,
    after: false,
  },
}

const ss = ['On date'];
*/
