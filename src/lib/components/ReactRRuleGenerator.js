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
    const { data: { repeat, end, options }, isCopied, rrule } = this.state;

    return (
      <div className="container px-0 pt-3 border border-light rounded">

        <div>
          <Repeat
            repeat={repeat}
            handleChange={handleChange}
          />
          <hr />
        </div>

        {!options.hideEnd && (
          <div>
            <End
              end={end}
              handleChange={handleChange}
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
    weekStartsOnSunday: PropTypes.bool,
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
