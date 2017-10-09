import React, { Component } from 'react';

import Repeat from './Repeat';
import End from './End';
import RRule from './RRule';
import computeRRule from '../utils/computeRRule';

class RRuleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repeatFrequency: '',
      repeatMode: 'on',
      onMonth: '',
      onDay: '',
      onThe: '',
      onTheDay: '',
      onTheMonth: '',
      end: '',
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
          repeatMode={this.state.repeatMode}
          onMonth={this.state.onMonth}
          onDay={this.state.onDay}
          onThe={this.state.onThe}
          onTheDay={this.state.onTheDay}
          onTheMonth={this.state.onTheMonth}
          handleChange={this.handleChange}
        />
        
        <End
          end={this.state.end}
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
