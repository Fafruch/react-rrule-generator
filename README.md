# React RRule Generator
> Recurence rules generator form built with React

[![LICENSE](https://img.shields.io/npm/l/express.svg)](LICENSE)
[![npm](https://img.shields.io/npm/dm/localeval.svg)](https://npm-stat.com/charts.html?package=react-rrule-generator)

![Screenshot](https://cdn.pbrd.co/images/GRQEdaG.png)

## Description

This is [ReactJS](http://facebook.github.io/react/index.html) project based on [Create React Library](https://github.com/UdiliaInc/create-react-library) and using [Bootstrap](https://github.com/twbs/bootstrap) styling. It's built with the help of a great [rrule.js](https://github.com/jakubroztocil/rrule) library.

It also uses:
* [lodash](https://github.com/lodash/lodash)
* [moment](https://github.com/moment/moment)
* [react-datetime](https://github.com/YouCanBookMe/react-datetime)

## Demo
https://fafruch.github.io/react-rrule-generator

## Installation

`npm install --save react-rrule-generator`

## Usage 
```js
import RRuleGenerator from 'react-rrule-generator';

import MyCustomCalendar from './MyCustomCalendar';

// render it as it is

const simpleRender = () => (
  <RRuleGenerator />
);

// or with your own configuration

const customizedRender = () => (
  <RRuleGenerator
    config={{
      repeat: ['Monthly', 'Weekly'],
      yearly: 'on the',
      monthly: 'on',
      end: ['Never', 'On date'],
      weekStartsOnSunday: true,
    }}
    onChange={(rrule) => {
      console.log(`RRule changed, now it's ${rrule}`);
    }}
    onCopy={(rrule) => {
      console.log(`RRule copied: ${rrule}`);
    }}
    customCalendar={MyCustomCalendar}
  />
);
```

## API

### Props

| Name         | Type    | Description |
| ------------ | ------- | ----------- |
| **config** | `object` | Accepts object of what options will be rendered. This object's structure is described in [#config](#config) |
| **onChange** | `function` | Callback trigger when the rrule changes. The callback receives newly generated RRule `string`.
| **onCopy** | `function` | Callback trigger when the user clicks on 'Copy' button. The callback receives current RRule `string`. |
| **customCalendar** | `React Component` or `stateless function` | This accepts custom calendar / datepicker for choosing a date in EndOnDate view. It receives following props by default: <ul><li>`'aria-label'` with value `'Datetime picker for end on date'`,</li><li>`value` - date value consumed by app logic, </li><li>`dateFormat` - by default `'YYYY-MM-DD'`, </li><li>`locale` - `'en/ca'` or `'en/gb'` depending on if `weekStartsOnSunday` in config is set to `true` or `false` </li>
<br />

### config
`config` is an object which accepts following:

| Name         | Type    | Description |
| ------------ | ------- | ----------- |
| **frequency** | `array` of `string` | You can optionally choose if you want to show repeating options `'Yearly'`, `'Monthly'`, `'Weekly'`, `'Daily'`, `'Hourly'`. You can pass for example `['Monthly', 'Weekly']` if you want to show only options for repeating monthly and weekly. |
| **yearly** | `string` | If `'on'` provided, only choosing a particular day of a month is available, if `'on the'` is provided, you have ability to choose for example 'fourth Wednesday of February' |
| **monthly** | `string` | If `'on'` provided, only choosing a particular day of a month is available, if `'on the'` is provided, you have ability to choose for example 'fourth Wednesday' |
| **hideEnd** | `boolean` | If `true` provided, you have no ending RRule view |
| **end** | `array` of `string` | You can optionally choose if you want to show ending options `'Never'`, `'After'`, `'On date'`. You can pass for example `['Never', 'On date']` if you want to show only options for ending never or on a particular date without showint 'After' option. |
| **weekStartsOnSunday** | `boolean` | If set to `true`, weeks starts on Sunday (both for views and RRule string). |

## License 
MIT
