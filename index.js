var path = require('path');

var alias_tag = "@browserify-alias";

module.exports = function(bundle) {
  bundle.register(function(body, file) {
    
    var re = new RegExp("\x5C/\x5C/"+alias_tag+"\x5Cs+(.*)[\x5Cs\x5Cn]+.*require\x5C([\x5C'\x5C\"](.*)[\x5C'\x5C\"]\x5C).*", "g");

    while (match = re.exec(body)) {
      var from = match[1];
      var to = match[2];
     
      bundle.alias(to, from);
    }
    return body;
  });
}
