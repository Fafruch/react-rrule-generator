import RRule from 'rrule';
import _ from 'lodash';

import computeYearlyOn from './computeYearlyOn';
import computeYearlyOnThe from './computeYearlyOnThe';

const computeYearly = ({ mode, on, onThe }) =>
  _.assign(
    {},
    { freq: RRule.YEARLY },
    mode === 'on' ? computeYearlyOn(on) : computeYearlyOnThe(onThe),
  );

export default computeYearly;
