import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';

const RRule = ({ rrule, isCopied, handleCopy }) => (
  <div className="px-3">
    <div className="form-group row d-flex align-items-sm-center">

      <div className="col-sm-2 text-sm-right">
        <label className="col-form-label">
          <strong>
            RRule
          </strong>
        </label>

      </div>
      <div className="col-sm-8">
        <div className="code">
          <code>
            {rrule}
          </code>
        </div>
        <div className="code-fader" />
      </div>

      <div className="col-sm-2">
        <CopyToClipboard
          text={rrule}
          onCopy={handleCopy}
        >
          <button
            className={`btn ${isCopied ? 'btn-secondary' : 'btn-primary'} float-right`}
            onClick={handleCopy}
          >
            {isCopied ? 'Copied' : 'Copy'}
          </button>
        </CopyToClipboard>
      </div>

    </div>
  </div>
);

RRule.propTypes = {
  rrule: PropTypes.string.isRequired,
  isCopied: PropTypes.bool.isRequired,
  handleCopy: PropTypes.func.isRequired,
};

export default RRule;
