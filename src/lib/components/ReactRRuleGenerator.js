import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cloneDeep, set } from 'lodash';

import Repeat from './Repeat/index';
import End from './End/index';
import computeRRuleToString from '../utils/computeRRule/toString/computeRRule';
import computeRRuleFromString from '../utils/computeRRule/fromString/computeRRule';
import configureInitialState from '../utils/configureInitialState';
import '../styles/index.css';

class ReactRRuleGenerator extends Component {
  state = configureInitialState(this.props.config, this.props.calendarComponent);

  componentWillMount() {
    const data = computeRRuleFromString(this.state.data, this.props.value);
    this.setState({ data, rrule: this.props.value });
  }

  componentWillReceiveProps(nextProps) {
    const data = computeRRuleFromString(this.state.data, nextProps.value);
    this.setState({ data, rrule: nextProps.value });
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.state.rrule;
  }

  handleChange = ({ target }) => {
    const newData = cloneDeep(this.state.data);
    set(newData, target.name, target.value);
    const rrule = computeRRuleToString(newData);

    this.props.onChange(rrule);
  };

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
  value: PropTypes.string,
  onChange: PropTypes.func,
  calendarComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};
ReactRRuleGenerator.defaultProps = {
  value: '',
  config: {},
  onChange() {},
  calendarComponent: undefined,
};

export default ReactRRuleGenerator;
