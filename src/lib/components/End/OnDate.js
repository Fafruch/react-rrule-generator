import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateTime from 'react-datetime';

import 'moment/locale/en-gb';
import 'moment/locale/en-ca';

import { DATE_TIME_FORMAT } from '../../constants/index';

const EndOnDate = ({
  onDate: {
    date,
    options,
  },
  handleChange,
}) => {
  const CustomCalendar = options.calendarComponent;
  const isCustomCalendarProvided = typeof CustomCalendar !== 'undefined';

  const locale = options.weekStartsOnSunday ? 'en-ca' : 'en-gb';
  const calendarAttributes = {
    'aria-label': 'Datetime picker for end on date',
    value: date,
    dateFormat: DATE_TIME_FORMAT,
    locale,
  };

  return (
    <div className="col-6 col-sm-3">
      {
        isCustomCalendarProvided
          ? <CustomCalendar
            {...calendarAttributes}
            onChange={(event) => {
              const editedEvent = {
                target: {
                  value: event.target.value,
                  name: 'end.onDate.date',
                },
              };

              handleChange(editedEvent);
            }}
          />
          : <DateTime
            {...calendarAttributes}
            inputProps={{ name: 'end.onDate.date' }}
            timeFormat={false}
            viewMode="days"
            closeOnSelect
            closeOnTab
            required
            onChange={(inputDate) => {
              const editedEvent = {
                target: {
                  value: moment(inputDate).format(DATE_TIME_FORMAT),
                  name: 'end.onDate.date',
                },
              };

              handleChange(editedEvent);
            }}
          />
      }
    </div>
  );
};

EndOnDate.propTypes = {
  onDate: PropTypes.shape({
    date: PropTypes.string.isRequired,
    options: PropTypes.shape({
      weekStartsOnSunday: PropTypes.bool,
      calendarComponent: PropTypes.func,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EndOnDate;
