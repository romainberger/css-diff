# CSS Diff [![Build Status](https://img.shields.io/travis/romainberger/css-diff/master.svg?style=flat-square)](https://travis-ci.org/romainberger/css-diff)

Get the diff between two css.

## Installation

```shell
$ npm install @romainberger/css-diff
```

## Usage

```js
const cssDiff = require('@romainberger/css-diff')

const cssA = `
body {
  background: white;
  color: red;
}
`

const cssB = `
body {
  background: white;
  color: blue;
}
`

const diff = cssDiff(cssA, cssB)
// body {
//   color: blue;
// }
```
