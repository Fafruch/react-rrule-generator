import React, { Component } from 'react';

import Repeat from './Repeat';
import End from './End';
import RRule from './RRule';
import computeRRule from '../utils/computeRRule';

class RRuleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repeatFrequency: 'Yearly',
      repeatYearlyMode: 'on',
      repeatYearlyOnMonth: '',
      repeatYearlyOnDay: 0,
      repeatYearlyOnTheMonth: '',
      repeatYearlyOnTheDay: 0,
      repeatYearlyOnTheWhich: '',
      repeatMonthlyMode: 'on day',
      repeatMonthlyFrequency: 0,
      repeatMonthlyOnDay: '',
      repeatMonthlyOnTheDay: '',
      repeatMonthlyOnTheWhich: '',
      repeatWeeklyFrequency: 0,
      repeatWeeklyDays: {
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false,
      },
      repeatDailyFrequency: 0,
      repeatHourlyFrequency: 0,
      endMode: '',
      endAfter: 0,
      endOnDate: '',
      isCopied: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleChange(what, newValue) {
    if (this.state[what] !== newValue) {
      this.setState({ [what]: newValue, isCopied: false });
    }
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
          repeatFrequency={this.state.repeatFrequency}
          repeatYearlyMode={this.state.repeatYearlyMode}
          repeatYearlyOnMonth={this.state.repeatYearlyOnMonth}
          repeatYearlyOnDay={this.state.repeatYearlyOnDay}
          repeatYearlyOnTheMonth={this.state.repeatYearlyOnTheMonth}
          repeatYearlyOnTheDay={this.state.repeatYearlyOnTheDay}
          repeatYearlyOnTheWhich={this.state.repeatYearlyOnTheWhich}
          repeatMonthlyMode={this.state.repeatMonthlyMode}
          repeatMonthlyFrequency={this.state.repeatMonthlyFrequency}
          repeatMonthlyOnDay={this.state.repeatMonthlyOnDay}
          repeatMonthlyOnTheDay={this.state.repeatMonthlyOnTheDay}
          repeatMonthlyOnTheWhich={this.state.repeatMonthlyOnTheWhich}
          repeatWeeklyFrequency={this.state.repeatWeeklyFrequency}
          repeatWeeklyDays={this.state.repeatWeeklyDays}
          repeatDailyFrequency={this.state.repeatDailyFrequency}
          repeatHourlyFrequency={this.state.repeatHourlyFrequency}
          handleChange={this.handleChange}
        />
        
        <End
          endMode={this.state.endMode}
          endAfter={this.state.endAfter}
          endOnDate={this.state.endOnDate}
          handleChange={this.handleChange}
        />
        
        <RRule
          rrule={computeRRule(this.state)}
          isCopied={this.state.isCopied}
          handleCopy={this.handleCopy}
        />
        
      </div>
    );
  }
}

export default RRuleContainer;
