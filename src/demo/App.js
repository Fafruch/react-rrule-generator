import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import TextareaAutosize from 'react-autosize-textarea';

import ReactRRuleGenerator from '../lib';
import './index.css';
import githubLogo from './github_logo.png';
import GermanTranslation from './GermanTranslation';

class App extends Component {
  state = {
    rrule: 'FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1',
    isCopied: false,
    language: 'en'
  };

  handleChangeLanguage = (event) => {
    event.persist();
    const newLanguage = event.target.value;
    this.setState({ language: newLanguage });
  };

  handleChange = (newRRule) => {
    this.setState({ rrule: newRRule, isCopied: false });
  };
  
  handleCopy = () => {
    this.setState({ isCopied: true });
  };

  getTranslation = () => {
    return (this.state.language === 'de') ? GermanTranslation : undefined;
  }

  render() {
    const { rrule, isCopied } = this.state;

    return (
      <div>
        <div className="app-navbar">
          <a href="https://github.com/fafruch/react-rrule-generator">
            &lt; go back to
            {' '}
            <img className="app-navbar-ghlogo" src={githubLogo} alt="Github logo" />
            /fafruch
          </a>

          <iframe
            title="github-star"
            src="https://ghbtns.com/github-btn.html?user=fafruch&repo=react-rrule-generator&type=star&count=true&size=medium"
            frameBorder="0"
            scrolling="0"
            width="78px"
            height="20px"
          />
        </div>
        <div className="app-header">
          <h1>React RRule Generator</h1>
        </div>

        <div className="app-desc">
          Recurrence rules generator form built with React
        </div>

        <div className="app container">
          <h5><strong>{'<RRuleGenerator />'}</strong></h5>

          <ReactRRuleGenerator
            onChange={this.handleChange}
            value={this.state.rrule}
            config={{
              hideStart: false
            }}
            translations={this.getTranslation()}
          />
        </div>

        <hr className="mt-5 mb-5" />

        <div className="container">        
          <h5><strong>Example handling</strong></h5>

          <div className="px-3 pt-3 border rounded">
            <div className="form-group row d-flex align-items-sm-center">

              <div className="col-sm-2 text-sm-right">
                <span className="col-form-label">
                  <strong>
                    RRule
                  </strong>
                </span>
              </div>

              <div className="col-sm-8">
                <TextareaAutosize
                  className={`form-control rrule ${isCopied ? 'rrule-copied' : 'rrule-not-copied'}`}
                  value={rrule}
                  readOnly
                />
              </div>

              <div className="col-sm-2">
                <CopyToClipboard
                  text={rrule}
                  onCopy={this.handleCopy}
                >
                  <button
                    aria-label="Copy generated RRule"
                    className={`btn ${isCopied ? 'btn-secondary' : 'btn-primary'} float-right`}
                  >
                    {isCopied ? 'Copied' : 'Copy'}
                  </button>
                </CopyToClipboard>
              </div>

            </div>
          </div>
        </div>

        <hr className="mt-5 mb-5" />

        <div className="container">
          <h5><strong>{'Language'}</strong></h5>
          <div className="px-3 pt-3 border rounded">
            <div className="form-group row d-flex align-items-sm-center">
              <div className="col-sm-2 text-sm-right">
                <span className="col-form-label">
                  <strong>
                    Language
                  </strong>
                </span>
              </div>

              <div className="col-sm-8">
                <select className="form-control" value={this.state.language} onChange={this.handleChangeLanguage}>
                  <option value="en">English</option>
                  <option value="de">German</option>
                </select>
              </div>            
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default App;
