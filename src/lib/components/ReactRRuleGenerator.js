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
    this.setState((currentState) => {
      const newData = cloneDeep(currentState.data);
      set(newData, target.name, target.value);
      const rrule = computeRRule(newData);

      this.props.onChange(rrule);

      return { data: newData, isCopied: false, rrule };
    });
  }

  handleCopy = () => {
    this.setState({ isCopied: true });

    this.props.onCopy(this.state.rrule);
  }

  render() {
    const { data: { repeat, end, options }, isCopied, rrule } = this.state;
    const { calendarComponent } = this.props;

    return (
      <div className="container px-0 pt-3 border border-light rounded">

        <div>
          <Repeat
            repeat={repeat}
            handleChange={this.handleChange}
          />
          <hr />
        </div>

        {!options.hideEnd && (
          <div>
            <End
              end={end}
              handleChange={this.handleChange}
              calendarComponent={calendarComponent}
            />
            <hr />
          </div>
        )}
        
        <RRule
          rrule={rrule}
          isCopied={isCopied}
          handleCopy={this.handleCopy}
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
  onChange: PropTypes.func,
  onCopy: PropTypes.func,
  calendarComponent: PropTypes.func,
};
ReactRRuleGenerator.defaultProps = {
  config: {},
  onChange() {},
  onCopy() {},
  calendarComponent() {},
};

export default ReactRRuleGenerator;
