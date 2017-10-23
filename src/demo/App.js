import React from 'react';
import ReactRRuleGenerator from '../lib';
import './index.css';

const App = () => (
  <div>
    <div className="app-header">
      <h1>React RRule Generator</h1>
    </div>
    <div className="app">
      <ReactRRuleGenerator />
    </div>
  </div>
);

export default App;
