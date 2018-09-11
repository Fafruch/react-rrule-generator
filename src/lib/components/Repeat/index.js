import React from 'react';
import PropTypes from 'prop-types';
import RepeatYearly from './Yearly/index';
import RepeatMonthly from './Monthly/index';
import RepeatWeekly from './Weekly/index';
import RepeatDaily from './Daily/index';
import RepeatHourly from './Hourly/index';

class Repeat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.isOptionAvailable = this.isOptionAvailable.bind(this);
    this.isOptionSelected = this.isOptionSelected.bind(this);
  }

  isOptionAvailable(option, options) {
    return !options.frequency || options.frequency.indexOf(option) !== -1;
  }

  isOptionSelected(option, frequency) {
    return frequency === option;
  }

  render() {
    const { repeat, handleChange, isNever } = this.props;
    const {
      frequency,
      yearly,
      monthly,
      weekly,
      daily,
      hourly,
      options,
    } = repeat;
    return (
      <div className="px-3">
        <div className="form-group row">
          <div className="col-sm-2 text-sm-right">
            <label
              id="Repeat Frequency"
              htmlFor="Repeat frequency"
              className="col-form-label"
            >
              <strong>
                Repeat
              </strong>
            </label>
          </div>
          <div className="col-sm-6">
            <select
              name="repeat.frequency"
              id="Repeat frequency"
              className="form-control"
              defaultValue={isNever && isNever !== undefined ? isNever : ('Never' || frequency)}
              onChange={handleChange}
            >
              {this.isOptionAvailable('Yearly', options) && <option value="Yearly">Yearly</option>}
              {this.isOptionAvailable('Monthly', options) && <option value="Monthly">Monthly</option>}
              {this.isOptionAvailable('Weekly', options) && <option value="Weekly">Weekly</option>}
              {this.isOptionAvailable('Daily', options) && <option value="Daily">Daily</option>}
              {this.isOptionAvailable('Daily', options) && <option value="Never">Never</option>}
              {this.isOptionAvailable('Hourly', options) && <option value="Hourly">Hourly</option>}
            </select>
          </div>
        </div>

        {this.isOptionSelected('Yearly', frequency) && <RepeatYearly yearly={yearly} handleChange={handleChange} />}
        {this.isOptionSelected('Monthly', frequency) && <RepeatMonthly monthly={monthly} handleChange={handleChange} />}
        {this.isOptionSelected('Weekly', frequency) && <RepeatWeekly weekly={weekly} handleChange={handleChange} />}
        {this.isOptionSelected('Daily', frequency) && <RepeatDaily daily={daily} handleChange={handleChange} />}
        {this.isOptionSelected('Hourly', frequency) && <RepeatHourly hourly={hourly} handleChange={handleChange} />}

      </div>
    );
  }
}

Repeat.propTypes = {
  repeat: PropTypes.shape({
    frequency: PropTypes.oneOf(['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly']).isRequired,
    yearly: PropTypes.object.isRequired,
    monthly: PropTypes.object.isRequired,
    weekly: PropTypes.object.isRequired,
    daily: PropTypes.object.isRequired,
    hourly: PropTypes.object.isRequired,
    options: PropTypes.shape({
      frequency: PropTypes.arrayOf(PropTypes.oneOf(['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly'])),
      yearly: PropTypes.oneOf(['on', 'on the']),
      monthly: PropTypes.oneOf(['on', 'on the']),
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  isNever: PropTypes.bool.isRequired,
};

export default Repeat;
