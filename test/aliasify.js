var test = require('tap').test;
var browserify = require('browserify');
var aliasify = require('../index.js');

var playground_dir = __dirname+'/playground/';

test('aliasify', function (t) {
    
    var bundle = browserify();
    bundle.use(aliasify);
    bundle.addEntry(playground_dir+'index.js');

    t.equals(bundle.aliases['nope'], 'foo');
    t.equals(bundle.aliases['nope-bis'], 'foo-bis');
    
    t.end();
});