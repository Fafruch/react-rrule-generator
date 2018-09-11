import moment from 'moment';
import computeRRuleToString from './computeRRule/toString/computeRRule';

import { DATE_TIME_FORMAT } from '../constants/index';

const configureState = (config = {}, calendarComponent) => {
  const configureFrequency = () => (config.repeat ? config.repeat[0] : 'Yearly');
  const configureYearly = () => (config.yearly || 'on');
  const configureMonthly = () => (config.monthly || 'on');
  const configureEnd = () => (config.end ? config.end[0] : 'Never');
  const configureHideStart = () => (typeof config.hideStart === 'undefined' ? true : config.hideStart);

  const data = {
    start: {
      onDate: {
        date: moment().format(DATE_TIME_FORMAT),
        options: {
          weekStartsOnSunday: config.weekStartsOnSunday,
          calendarComponent,
        },
      },
    },
    repeat: {
      frequency: configureFrequency(),
      yearly: {
        mode: configureYearly(),
        on: {
          month: 'Jan',
          day: 1,
        },
        onThe: {
          month: 'Jan',
          day: 'Monday',
          which: 'First',
        },
        options: {
          modes: config.yearly,
        },
      },
      monthly: {
        mode: configureMonthly(),
        interval: 1,
        on: {
          day: 1,
        },
        onThe: {
          day: 'Monday',
          which: 'First',
        },
        options: {
          modes: config.monthly,
        },
      },
      weekly: {
        interval: 1,
        days: {
          mon: false,
          tue: false,
          wed: false,
          thu: false,
          fri: false,
          sat: false,
          sun: false,
        },
        options: {
          weekStartsOnSunday: config.weekStartsOnSunday,
        },
      },
      daily: {
        interval: 1,
      },
      hourly: {
        interval: 1,
      },
      options: {
        frequency: config.repeat,
      },
      never: {
        interval: 1,
      },
    },
    end: {
      mode: configureEnd(),
      after: 1,
      onDate: {
        date: moment().format(DATE_TIME_FORMAT),
        options: {
          weekStartsOnSunday: config.weekStartsOnSunday,
          calendarComponent,
        },
      },
      options: {
        modes: config.end,
      },
    },
    options: {
      hideStart: configureHideStart(),
      hideEnd: config.hideEnd,
      hideError: config.hideError,
      weekStartsOnSunday: config.weekStartsOnSunday,
    },
    error: null,
  };

  return {
    data,
    rrule: computeRRuleToString(data),
  };
};

export default configureState;
