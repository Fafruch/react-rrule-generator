import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cloneDeep, set } from 'lodash';

import Repeat from './Repeat/index';
import End from './End/index';
import RRule from './RRule/index';
import computeRRule from '../utils/computeRRule/computeRRule';
import configureInitialState from '../utils/configureInitialState';
import '../styles/index.css';

class ReactRRuleGenerator extends Component {
  state = configureInitialState(this.props.config);

  componentWillMount() {
    this.setState({ ...this.state, rrule: computeRRule(this.state.data) });
  }

  handleChange = ({ target }) => {
    const { onRRuleChange } = this.props;

    this.setState((currentState) => {
      const newData = cloneDeep(currentState.data);
      set(newData, target.name, target.value);
      const rrule = computeRRule(newData);

      onRRuleChange(rrule);

      return { data: newData, isCopied: false, rrule };
    });
  }

  handleCopy = () => {
    const { onRRuleCopy } = this.props;

    this.setState({ isCopied: true });

    onRRuleCopy(this.state.rrule);
  }

  render() {
    const { handleChange, handleCopy } = this;
    const { data, isCopied, rrule } = this.state;
    const { repeat, end } = data;
    const { config } = this.props;

    return (
      <div className="container px-0 pt-3 border border-light rounded">

        <div>
          <Repeat
            repeat={repeat}
            handleChange={handleChange}
            config={config}
          />
          <hr />
        </div>

        {!config.hideEnd && (
          <div>
            <End
              end={end}
              handleChange={handleChange}
              config={config}
            />
            <hr />
          </div>
        )}
        
        <RRule
          rrule={rrule}
          isCopied={isCopied}
          handleCopy={handleCopy}
        />
        
      </div>
    );
  }
}
ReactRRuleGenerator.propTypes = {
  config: PropTypes.shape({
    frequency: PropTypes.arrayOf(PropTypes.oneOf(['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly'])),
    yearly: PropTypes.oneOf(['on', 'on the']),
    monthly: PropTypes.oneOf(['on', 'on the']),
    hideEnd: PropTypes.bool,
    end: PropTypes.arrayOf(PropTypes.oneOf(['Never', 'After', 'On date'])),
    calendarFirstDayOfAWeek: PropTypes.oneOf(['Mon', 'Sun']),
  }),
  onRRuleChange: PropTypes.func,
  onRRuleCopy: PropTypes.func,
};
ReactRRuleGenerator.defaultProps = {
  config: {},
  onRRuleChange() {},
  onRRuleCopy() {},
};

export default ReactRRuleGenerator;
