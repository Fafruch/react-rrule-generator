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
  const locale = options.weekStartsOnSunday ? 'en-ca' : 'en-gb';

  return (
    <div className="col-6 col-sm-3">
      <DateTime
        aria-label="Datetime picker for end on date"
        inputProps={{ name: 'end.onDate.date' }}
        value={date}
        dateFormat={DATE_TIME_FORMAT}
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
        locale={locale}
      />
    </div>
  );
};

EndOnDate.propTypes = {
  onDate: PropTypes.shape({
    date: PropTypes.string.isRequired,
    options: PropTypes.shape({
      weekStartsOnSunday: PropTypes.bool,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EndOnDate;
