import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cloneDeep, set } from 'lodash';

import Repeat from './Repeat/index';
import End from './End/index';
import computeRRule from '../utils/computeRRule/computeRRule';
import configureInitialState from '../utils/configureInitialState';
import '../styles/index.css';

class ReactRRuleGenerator extends Component {
  state = configureInitialState(this.props.config, this.props.calendarComponent);

  componentDidMount() {
    this.props.onMount(this.state.rrule);
  }

  handleChange = ({ target }) => {
    this.setState((currentState) => {
      const newData = cloneDeep(currentState.data);
      set(newData, target.name, target.value);
      const rrule = computeRRule(newData);

      this.props.onChange(rrule);

      return { data: newData, rrule };
    });
  }

  render() {
    const { data: { repeat, end, options } } = this.state;

    return (
      <div className="px-0 pt-3 border border-light rounded">

        <div>
          <Repeat
            repeat={repeat}
            handleChange={this.handleChange}
          />
        </div>

        <hr />

        {!options.hideEnd && (
          <End
            end={end}
            handleChange={this.handleChange}
          />
        )}

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
  onMount: PropTypes.func,
  calendarComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};
ReactRRuleGenerator.defaultProps = {
  config: {},
  onChange() {},
  onMount() {},
  calendarComponent: undefined,
};

export default ReactRRuleGenerator;
