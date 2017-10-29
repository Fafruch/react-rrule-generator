import React from 'react';

import ReactRRuleGenerator from '../lib';
import './index.css';
import githubLogo from './github_logo.png';

const App = () => (
  <div>
    <div className="app-header">
      <div className="app-header-github">
        <a href="https://github.com/fafruch/react-rrule-generator">
          go back to
          {' '}
          <img className="app-header-github-logo" src={githubLogo} alt="Github logo" />
          /fafruch
        </a>
      </div>
      <h1>React RRule Generator</h1>
    </div>
    <div className="app">
      <ReactRRuleGenerator />
    </div>
  </div>
);

export default App;
