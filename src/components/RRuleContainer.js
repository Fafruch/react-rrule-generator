import React, { Component } from 'react';

import Repeat from './Repeat';
import End from './End';
import RRule from './RRule';

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
      endDate: '',
      rrule: '',
    };

    this.handleRepeatChange = this.handleRepeatChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
  }

  handleRepeatChange(what, newValue) {
    this.setState({ [what]: newValue });
  }

  handleEndChange(what, newValue) {
    this.setState({ [what]: newValue });
  }

  render() {
    return (
      <div>
        
        <Repeat
          repeatFrequency={this.state.repeatFrequency}
          repeatMode={this.state.repeatMode}
          onMonth={this.state.onMonth}
          onDay={this.state.onDay}
          onThe={this.state.onThe}
          onTheDay={this.state.onTheDay}
          onTheMonth={this.state.onTheMonth}
          handleChange={this.handleRepeatChange}
        />
        
        <End
          end={this.state.end}
          endDate={this.state.endDate}
          handleChange={this.handleEndChange}
        />
        
        <RRule rrule={this.state.rrule} />
        
      </div>
    );
  }
}

export default RRuleContainer;
