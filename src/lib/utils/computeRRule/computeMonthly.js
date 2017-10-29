import RRule from 'rrule';
import { assign } from 'lodash';

import computeMonthlyOn from './computeMonthlyOn';
import computeMonthlyOnThe from './computeMonthlyOnThe';

const computeMonthly = ({
  mode,
  interval,
  on,
  onThe,
}) =>
  assign(
    {},
    { freq: RRule.MONTHLY },
    { interval },
    mode === 'on' ? computeMonthlyOn(on) : computeMonthlyOnThe(onThe),
  );

export default computeMonthly;
