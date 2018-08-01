import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateTime from 'react-datetime';

import 'moment/locale/en-gb';
import 'moment/locale/en-ca';

import { DATE_TIME_FORMAT } from '../../constants/index';

const StartOnDate = ({
                       onDate: {
                         date,
                         options,
                       },
                       handleChange,
                     }) => {

  const CustomCalendar = options.calendarComponent;
  const locale = options.weekStartsOnSunday ? 'en-ca' : 'en-gb';
  const calendarAttributes = {
    'aria-label': 'Datetime picker for end on date',
    value: date,
    dateFormat: DATE_TIME_FORMAT,
    locale,
    readOnly: true,
  };

  return (
    <div className="col-6 col-sm-3">
      {
        CustomCalendar
          ? <CustomCalendar
            { ...calendarAttributes }
            onChange={ (event) => {
              const editedEvent = {
                target: {
                  value: event.target.value,
                  name: 'start.onDate.date',
                },
              };

              handleChange(editedEvent);
            } }
          />
          : <DateTime
            { ...calendarAttributes }
            inputProps={ { name: 'start.onDate.date', readOnly: true } }
            timeFormat={ false }
            viewMode="days"
            closeOnSelect
            closeOnTab
            required
            onChange={ (inputDate) => {
              const editedEvent = {
                target: {
                  value: moment(inputDate).format(DATE_TIME_FORMAT),
                  name: 'start.onDate.date',
                },
              };

              handleChange(editedEvent);
            } }
          />
      }
    </div>
  );
};

StartOnDate.propTypes = {
  onDate: PropTypes.shape({
    date: PropTypes.string.isRequired,
    options: PropTypes.shape({
      weekStartsOnSunday: PropTypes.bool,
      calendarComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default StartOnDate;
