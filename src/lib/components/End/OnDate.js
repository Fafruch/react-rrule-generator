import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateTime from 'react-datetime';

import 'moment/locale/en-gb';
import 'moment/locale/en-ca';

import { DATE_TIME_FORMAT } from '../../constants/index';

const EndOnDate = ({
  onDate,
  config,
  handleChange,
}) => {
  const locale = config.calendarFirstDayOfAWeek === 'Sun' ? 'en-ca' : 'en-gb';

  return (
    <div className="col-6 col-sm-3">
      <DateTime
        aria-label="Datetime picker for end on date"
        inputProps={{ name: 'end.onDate' }}
        value={onDate}
        dateFormat={DATE_TIME_FORMAT}
        timeFormat={false}
        viewMode="days"
        closeOnSelect
        closeOnTab
        required
        onChange={(inputDate) => {
          const editedEvent = { target: { value: moment(inputDate).format(DATE_TIME_FORMAT), name: 'end.onDate' } };
          handleChange(editedEvent);
        }}
        locale={locale}
      />
    </div>
  );
};

EndOnDate.propTypes = {
  onDate: PropTypes.string.isRequired,
  config: PropTypes.shape({
    calendarFirstDayOfAWeek: PropTypes.oneOf(['Mon', 'Sun']),
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EndOnDate;
