import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';

const RRule = ({ rrule, isCopied, handleCopy }) => (
  <div>
    <div className="m-5">
      Your RRule is: <code>{rrule}</code>
    </div>
    <CopyToClipboard
      text={rrule}
      onCopy={handleCopy}
    >
      <button
        className={isCopied ? 'btn btn-secondary' : 'btn btn-primary'}
        onClick={handleCopy}
      >
        {isCopied ? 'Copied' : 'Copy'}
      </button>
    </CopyToClipboard>
  </div>
);

RRule.propTypes = {
  rrule: PropTypes.string.isRequired,
  isCopied: PropTypes.bool.isRequired,
  handleCopy: PropTypes.func.isRequired,
};

export default RRule;
