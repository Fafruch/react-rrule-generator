import React from 'react';
import PropTypes from 'prop-types';

const End = ({
  end,
  endAfter,
  endOnDate,
  handleChange,
}) => (
  <div>
    <h2>End</h2>
    <form>
      <select
        className="form-control"
        value={end}
        onChange={event => handleChange('end', event.target.value)}
      >
        <option value="Never">Never</option>
        <option value="After">After</option>
        <option value="On date">On date</option>
      </select>
    </form>

    {
      end === 'After' &&
        <form>
          <input
            name="endAfter"
            className="form-control"
            value={endAfter}
            onChange={(event) => {
              const inputNumber = +event.target.value;
              if (isNaN(inputNumber) || inputNumber >= 999) return;
              handleChange('endAfter', inputNumber);
            }}
          />
          executions.
        </form>
    }

    {
      end === 'On date' &&
      <form>
        <input
          className="form-control"
          value={endOnDate}
          onChange={event => handleChange('endOnDate', event.target.value)}
        />
      </form>
    }

  </div>
);

End.propTypes = {
  end: PropTypes.string.isRequired,
  endAfter: PropTypes.number.isRequired,
  endOnDate: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default End;
