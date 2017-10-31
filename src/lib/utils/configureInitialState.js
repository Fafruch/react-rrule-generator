import moment from 'moment';
import computeRRule from './computeRRule/computeRRule';

import { DATE_TIME_FORMAT } from '../constants/index';

const configureState = (config = {}) => {
  const configureFrequency = () => (config.repeat ? config.repeat[0] : 'Yearly');
  const configureYearly = () => (config.yearly || 'on');
  const configureMonthly = () => (config.monthly || 'on');
  const configureEnd = () => (config.end ? config.end[0] : 'Never');

  const data = {
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
      },
      daily: {
        interval: 1,
      },
      hourly: {
        interval: 1,
      },
    },
    end: {
      mode: configureEnd(),
      after: 1,
      onDate: moment().format(DATE_TIME_FORMAT),
    },
  };

  return {
    data,
    isCopied: false,
    rrule: computeRRule(data),
  };
};

export default configureState;
