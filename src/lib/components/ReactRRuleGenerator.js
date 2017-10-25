import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cloneDeep, set } from 'lodash';
import moment from 'moment';

import Repeat from './Repeat/index';
import End from './End/index';
import RRule from './RRule/index';
import computeRRule from '../utils/computeRRule';
import { DATE_TIME_FORMAT } from '../constants/index';
import '../styles/index.css';

class ReactRRuleGenerator extends Component {
  state = {
    data: {
      repeat: {
        frequency: 'Yearly',
        yearly: {
          mode: 'on',
          on: {
            month: 'Jan',
            day: 1,
          },
          onThe: {
            month: 'Jan',
            day: 'Monday',
            which: 'First',
          },
        },
        monthly: {
          mode: 'on',
          interval: 1,
          on: {
            day: 1,
          },
          onThe: {
            day: 'Monday',
            which: 'First',
          },
        },
        weekly: {
          interval: 1,
          days: {
            mon: false,
            tue: false,
            wed: false,
            thu: false,
            fri: false,
            sat: false,
            sun: false,
          },
        },
        daily: {
          interval: 1,
        },
        hourly: {
          interval: 1,
        },
      },
      end: {
        mode: 'Never',
        after: 1,
        onDate: moment().format(DATE_TIME_FORMAT),
      },
    },
    isCopied: false,
  };

  handleChange = ({ target }) => {
    const { onRRuleChange } = this.props;
    this.setState((currentState) => {
      const newData = cloneDeep(currentState.data);
      set(newData, target.name, target.value);
      return { data: newData, isCopied: false };
    });

    onRRuleChange(computeRRule(this.state.data));
  }

  handleCopy = () => this.setState({ isCopied: true });

  render() {
    const { handleChange, handleCopy } = this;
    const { data, isCopied } = this.state;
    const { repeat, end } = data;
    const { hideEnd } = this.props;

    return (
      <div className="container px-0 pt-3 border border-light rounded">

        <div>
          <Repeat
            repeat={repeat}
            handleChange={handleChange}
          />
          <hr />
        </div>

        {!hideEnd && (
          <div>
            <End
              end={end}
              handleChange={handleChange}
            />
            <hr />
          </div>
        )}
        
        <RRule
          rrule={computeRRule(data)}
          isCopied={isCopied}
          handleCopy={handleCopy}
        />
        
      </div>
    );
  }
}
ReactRRuleGenerator.propTypes = {
  hideEnd: PropTypes.bool,
  onRRuleChange: PropTypes.func,
};
ReactRRuleGenerator.defaultProps = {
  hideEnd: false,
  onRRuleChange() {},
};

export default ReactRRuleGenerator;
