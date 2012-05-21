node-aliasify
=============

Browserify middleware allowing embedded alias rules in source code

### Installation

```bash
$ npm install aliasify
```

### Usage

Just throw the *aliasify* tag before the require statement you want to be ignored by browserfy.

```js
//@browserify-alias shim-module
var module = require('module');
```

Then, during the bundling specify the *aliasify* middleware :

```js
var browserify = require('browserify');
var aliasify = require('aliasify');

var bundle = browserify();
bundle.use(aliasify);
bundle.addEntry('./index.js');
bundle.bundle();
```


Or :
	
```bash
$ browserify entry.js -p 'aliasify' -o browserify.js
```

### Test

```bash
$ npm test
```