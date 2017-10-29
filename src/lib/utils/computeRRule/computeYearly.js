import RRule from 'rrule';
import { assign } from 'lodash';

import computeYearlyOn from './computeYearlyOn';
import computeYearlyOnThe from './computeYearlyOnThe';

const computeYearly = ({ mode, on, onThe }) =>
  assign(
    {},
    { freq: RRule.YEARLY },
    mode === 'on' ? computeYearlyOn(on) : computeYearlyOnThe(onThe),
  );

export default computeYearly;
