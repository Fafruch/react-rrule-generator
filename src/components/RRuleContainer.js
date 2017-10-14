import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';

import Repeat from './Repeat';
import End from './End';
import RRule from './RRule';
import computeRRule from '../utils/computeRRule';
import { DATE_TIME_FORMAT } from '../constants/index';

class RRuleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        repeat: {
          frequency: 'Yearly',
          yearly: {
            mode: 'on',
            onMonth: 'Jan',
            onDay: 1,
            onTheMonth: 'Jan',
            onTheDay: 'Monday',
            onTheWhich: 'First',
          },
          monthly: {
            mode: 'on day',
            frequency: 1,
            onDay: 1,
            onTheDay: 'Monday',
            onTheWhich: 'First',
          },
          weekly: {
            frequency: 1,
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
            frequency: 1,
          },
          hourly: {
            frequency: 1,
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

    this.handleChange = this.handleChange.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleChange(event) {
    const newData = _.cloneDeep(this.state.data);
    _.set(newData, event.target.name, event.target.value);
    this.setState({ data: newData, isCopied: false });
  }

  handleCopy() {
    if (!this.state.isCopied) {
      this.setState({ isCopied: true });
    }
  }

  render() {
    return (
      <div className="container m-5">
        
        <Repeat
          repeat={this.state.data.repeat}
          handleChange={this.handleChange}
        />
        
        <End
          end={this.state.data.end}
          handleChange={this.handleChange}
        />
        
        <RRule
          rrule={computeRRule(this.state.data)}
          isCopied={this.state.isCopied}
          handleCopy={this.handleCopy}
        />
        
      </div>
    );
  }
}

export default RRuleContainer;
