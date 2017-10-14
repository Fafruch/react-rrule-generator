import RRule from 'rrule';
import _ from 'lodash';

import computeMonthlyOn from './computeMonthlyOn';
import computeMonthlyOnThe from './computeMonthlyOnThe';

const computeMonthly = ({
  mode,
  frequency,
  on,
  onThe,
}) =>
  _.assign(
    {},
    { freq: RRule.MONTHLY },
    { interval: frequency },
    mode === 'on' ? computeMonthlyOn(on) : computeMonthlyOnThe(onThe),
  );

export default computeMonthly;
