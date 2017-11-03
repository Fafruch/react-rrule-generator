import React from 'react';

import ReactRRuleGenerator from '../lib';
import './index.css';
import githubLogo from './github_logo.png';

const App = () => (
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
        width="72px"
        height="20px"
      />
    </div>
    <div className="app-header">
      <h1>React RRule Generator</h1>
    </div>

    <div className="app-desc">
      Recurence rules generator form built with React
    </div>

    <div className="app">
      <ReactRRuleGenerator />
    </div>
  </div>
);

export default App;
