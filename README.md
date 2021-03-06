[![GitHub license](https://img.shields.io/badge/license-GPL--3.0-green.svg)]()
[![GitHub version](https://badge.fury.io/gh/supernomad%2Fchunky.svg)](http://badge.fury.io/gh/supernomad%2Fchunky)
[![Codacy Badge](https://www.codacy.com/project/badge/92a9c19ff3474abeaaf0e869317da1a3)](https://www.codacy.com/app/csaide/chunky)
[![Coverage Status](https://coveralls.io/repos/Supernomad/chunky/badge.svg?branch=master)](https://coveralls.io/r/Supernomad/chunky?branch=master)
[![Build Status](https://travis-ci.org/Supernomad/chunky.svg?branch=master)](https://travis-ci.org/Supernomad/chunky)

[![NPM](https://nodei.co/npm/chunkyjs.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/chunkyjs/)
# chunkyjs
An async upload/download node library leveraging express.js, which provides chunked transfer api's.

What do we mean by a chunked transfer api? Well, what chunkyjs does is provide an api interface that allows downloading or uploading multiple chunks of a file at the same time. This effectively allows you to multi-thread your applications data transfer logic.

### Installation
Installation is the same as any other module.
```
	npm install chunkyjs
```
### Usage
Basic usage of chunkyjs is as simple as requiring the module and passing it into the expressjs app's `use` funtion
``` js
	var express = require('express'),
		app = express(),
		chunky = require('chunkyjs');
	
	app.use(chunky.chunked());
	app.listen(8080);
```

### Development/Testing
```
	git clone https://github.com/Supernomad/chunky.git
	cd chunky/
	npm install
	npm install -g grunt-cli
	grunt
```

### Datastore
chunkyjs is currently employing `node-cache` in order to store transfer specific metadata. This is great for development, however means that chunkyjs in its current state cannot be clustered. Support for clustered datastores is on the way.

### TODO
- Create the front-end client's
  - Need to properly handle downloads in a browser context.
- Create the node client's

### Contributing
We welcome contributions, feel free to fork us and make as many PR's as you would like.

A few guide lines:
- You should always rebase your branch on our latest master branch before making a PR.
- We want to maintain a status quo when it comes to the code in chunkyjs. So any PR should satisfy our codacy rules, and maintain the `A` ranking we currently have.
- Again to maintain the status quo all PR's should contain unit-tests that test the additional funcationality and/or bug fix(s).
- Other than that happy coding