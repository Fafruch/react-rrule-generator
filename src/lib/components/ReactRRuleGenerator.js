import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { cloneDeep, set } from 'lodash';

import Start from './Start/index';
import Repeat from './Repeat/index';
import End from './End/index';
import computeRRuleToString from '../utils/computeRRule/toString/computeRRule';
import computeRRuleFromString from '../utils/computeRRule/fromString/computeRRule';
import configureInitialState from '../utils/configureInitialState';
import '../styles/index.css';

class ReactRRuleGenerator extends PureComponent {
  // compute default view based on user's config
  state = configureInitialState(
    this.props.config,
    this.props.calendarComponent,
    this.props.id,
  );

  componentWillMount() {
    if (this.props.onChange === ReactRRuleGenerator.defaultProps.onChange) {
      // no onChange() was provided
      throw new Error('No onChange() function has been passed to RRuleGenerator. \n' +
        'Please provide one, it\'s needed to handle generated value.');
    }

    if (this.props.value) {
      // if value is provided to RRuleGenerator, it's used to compute state of component's forms
      const data = computeRRuleFromString(this.state.data, this.props.value);
      this.setState({ data });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value) {
      const data = computeRRuleFromString(this.state.data, nextProps.value);
      this.setState({ data });
    }
  }

  handleChange = ({ target }) => {
    const newData = cloneDeep(this.state.data);
    set(newData, target.name, target.value);
    const rrule = computeRRuleToString(newData);

    this.setState({ data: newData });
    this.props.onChange(rrule);
  };

  render() {
    const {
      id,
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
                  id={`${id}-start`}
                  start={start}
                  handleChange={this.handleChange}
                />
                <hr />
              </div>
            )
          }

          <div>
            <Repeat
              id={`${id}-repeat`}
              repeat={repeat}
              handleChange={this.handleChange}
            />
          </div>

          {
            !options.hideEnd && (
              <div>
                <hr />
                <End
                  id={`${id}-end`}
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
  id: PropTypes.string,
  config: PropTypes.shape({
    frequency: PropTypes.arrayOf(PropTypes.oneOf(['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly'])),
    yearly: PropTypes.oneOf(['on', 'on the']),
    monthly: PropTypes.oneOf(['on', 'on the']),
    end: PropTypes.arrayOf(PropTypes.oneOf(['Never', 'After', 'On date'])),
    hideStart: PropTypes.bool,
    hideEnd: PropTypes.bool,
    hideError: PropTypes.bool,
    weekStartsOnSunday: PropTypes.bool,
    allowBYSETPOS: PropTypes.bool,
  }),
  value: PropTypes.string,
  onChange: PropTypes.func,
  calendarComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};
ReactRRuleGenerator.defaultProps = {
  id: null,
  value: '',
  config: {},
  onChange() {},
  calendarComponent: null,
};

export default ReactRRuleGenerator;
