import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cloneDeep, set } from 'lodash';

import Start from './Start/index';
import Repeat from './Repeat/index';
import End from './End/index';
import computeRRuleToString from '../utils/computeRRule/toString/computeRRule';
import computeRRuleFromString from '../utils/computeRRule/fromString/computeRRule';
import configureInitialState from '../utils/configureInitialState';
import '../styles/index.css';

class ReactRRuleGenerator extends Component {
  // compute default view based on user's config
  state = configureInitialState(this.props.config, this.props.calendarComponent);

  componentWillMount() {
    if (this.props.onChange === ReactRRuleGenerator.defaultProps.onChange) {
      // no onChange() was provided
      throw new Error('No onChange() function has been passed to RRuleGenerator. \n' +
        'Please provide one, it\'s needed to handle generated value.');
    }

    if (this.props.value) {
      // if value is provided to RRuleGenerator, it's used to compute state of component's forms
      const data = computeRRuleFromString(this.state.data, this.props.value);
      this.setState({
        data,
        rrule: this.props.value,
        selectedValue: null,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value) {
      const data = computeRRuleFromString(this.state.data, nextProps.value);
      this.setState({ data, rrule: nextProps.value });
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.state.rrule;
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.selectedValue !== this.state.selectedValue) {
      this.setState({
        selectedValue: nextState.selectedValue,
      });
    }
  }

  handleChange = ({ target }) => {
    const newData = cloneDeep(this.state.data);
    if (target.value === 'Never') {
      this.setState({
        isNever: target.value,
      });
    } else {
      this.setState({
        isNever: null,
      });
    }
    const value = target.value === 'Never' ? 'Daily' : target.value;
    set(newData, target.name, value);
    console.log("new data", newData)
    console.log("target name", target.name, "target value", target.label, "target-label", target.key)
    const rrule = computeRRuleToString(newData);

    console.log("rrule", rrule);

    this.setState({
      data: newData,
      rrule,
      selectedValue: target.value,
    });
    this.props.onChange(rrule);
  };

  render() {
    const {
      data: {
        start,
        repeat,
        end,
        options,
        error,
      },
    } = this.state;

    return (
      <div>

        {
          !options.hideError && error && (
            <div className="alert alert-danger">
              You provided an invalid RRule value to component. {`'${error.value}'`} is not a correct RRule string.
            </div>
          )
        }

        <div className="px-0 pt-3 border rounded">

          {
            !options.hideStart && (
              <div>
                <Start
                  start={start}
                  handleChange={this.handleChange}
                />
                <hr />
              </div>
            )
          }

          <div>
            <Repeat
              repeat={repeat}
              isNever={this.state.isNever}
              selectedValue={this.state.selectedValue}
              handleChange={this.handleChange}
            />
          </div>

          {
            !options.hideEnd && (
              <div>
                <hr />
                <End
                  end={end}
                  handleChange={this.handleChange}
                />
              </div>
            )
          }

        </div>
      </div>
    );
  }
}

ReactRRuleGenerator.propTypes = {
  config: PropTypes.shape({
    frequency: PropTypes.arrayOf(PropTypes.oneOf(['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly'])),
    yearly: PropTypes.oneOf(['on', 'on the']),
    monthly: PropTypes.oneOf(['on', 'on the']),
    end: PropTypes.arrayOf(PropTypes.oneOf(['Never', 'After', 'On date'])),
    hideStart: PropTypes.bool,
    hideEnd: PropTypes.bool,
    hideError: PropTypes.bool,
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
  calendarComponent: null,
};

export default ReactRRuleGenerator;
