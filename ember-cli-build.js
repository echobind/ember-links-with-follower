/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
var postcssImport = require('postcss-import');
var reporter = require('postcss-reporter');
var cssnext = require('postcss-cssnext');
var cssnano = require('cssnano');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    'babel': {
      optional: ['es7.decorators']
    },
    postcssOptions: {
      plugins: [
        {
          module: postcssImport,
          options: {}
        },
        {
          module: cssnext,
          options: {
            browsers: ['last 2 version']
          }
        },
        {
          module: cssnano,
          options: {}
        },
        {
          module: reporter,
          options: {}
        }
      ]
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
