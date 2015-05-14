/* jshint ignore:start */

define('discovery-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'discovery-app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("discovery-app/tests/test-helper");
} else {
  require("discovery-app/app")["default"].create({"name":"discovery-app","version":"0.0.0.4e07b1ed"});
}

/* jshint ignore:end */
