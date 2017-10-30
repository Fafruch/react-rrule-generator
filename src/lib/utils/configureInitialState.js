import moment from 'moment';
import { DATE_TIME_FORMAT } from '../constants/index';

const configureState = (config = {}) => {
  const configureFrequency = () => {
    if (config.repeat) {
      return config.repeat[0];
    }
    return 'Yearly';
  };

  const configureYearly = () => {
    if (config.yearly) {
      return config.yearly;
    }
    return 'on';
  };

  const configureMonthly = () => {
    if (config.monthly) {
      return config.monthly;
    }
    return 'on';
  };

  const configureEnd = () => {
    if (config.end) {
      return config.end[0];
    }
    return 'Never';
  };

  return {
    data: {
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
    },
    isCopied: false,
    rrule: '',
  };
};

export default configureState;
