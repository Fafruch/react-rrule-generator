import React from 'react';
import PropTypes from 'prop-types';

const RRule = ({ rrule, isCopied, handleCopy }) => (
  <div>
    <div className="m-5">
      Your RRule is: <code>{rrule}</code>
    </div>
    <button
      className={isCopied ? 'btn btn-secondary' : 'btn btn-primary'}
      onClick={handleCopy}
    >
      {isCopied ? 'Copied' : 'Copy'}
    </button>
  </div>
);

RRule.propTypes = {
  rrule: PropTypes.string.isRequired,
  isCopied: PropTypes.bool.isRequired,
  handleCopy: PropTypes.func.isRequired,
};

export default RRule;
