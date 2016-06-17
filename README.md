# NPM Module Boilerplate [![Build Status](https://img.shields.io/travis/romainberger/npm-module-boilerplate/master.svg?style=flat-square)](https://travis-ci.org/romainberger/npm-module-boilerplate)

Personal boilerplate for modules.

Includes:

* [Babel](https://babeljs.io/) stage 0
* [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/) for testing
* [Flow](http://flowtype.org/) for static type checking
* [Travis CI](https://travis-ci.com/) for continuous integration

## New project initialization

```shell
$ git clone
$ mv npm-module-boilerplate awesome-module
$ cd awesome-module
$ rm -rf .git
$ git init
$ npm install
```

## Usage

Run tests:

```shell
$ npm test
```

Run flow

```shell
$ npm run flow
```
