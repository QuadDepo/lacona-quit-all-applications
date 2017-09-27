'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extensions = exports.MyNewCommand = undefined;

var _elliptical = require('elliptical');

var _laconaPhrases = require('lacona-phrases');

var _laconaApi = require('lacona-api');

var script = 'tell application "System Events" to set apps to unix id of every application process whose visible is true and name is not "Finder" and name is not "Lacona" and name is not "Atom" and name is not "iTerm"\nrepeat with closeid in apps\n\tdo shell script ("kill " & closeid)\nend repeat'; /** @jsx createElement */
var MyNewCommand = exports.MyNewCommand = {
  extends: [_laconaPhrases.Command],

  execute: function execute(result) {
    console.log('executing MyNewCommand');
    (0, _laconaApi.runApplescript)({ script: script });
  },
  describe: function describe() {
    return (0, _elliptical.createElement)('literal', {
      text: 'quit all'
    });
  }
};

var extensions = exports.extensions = [MyNewCommand];