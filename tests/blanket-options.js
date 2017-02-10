/* globals blanket, module */

var options = {
  modulePrefix: 'ember-links-with-follower',
  filter: '//.*ember-links-with-follower/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['json'],
    autostart: true
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
