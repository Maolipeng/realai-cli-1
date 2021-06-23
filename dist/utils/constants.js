"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALLOW_TEMPLATES = exports.REGISTRYS_MAP = exports.RC = exports.VERSION = void 0;

var _package = require("../../package.json");

var VERSION = _package.version;
exports.VERSION = VERSION;
var HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
var RC = "".concat(HOME, "/.relairc");
exports.RC = RC;
var REGISTRYS_MAP = {
  react: {
    registry: 'realai-FE',
    template: 'config-template',
    branch: 'master'
  },
  screen: {
    registry: 'realai-FE',
    template: 'data-visual-screen',
    branch: 'main'
  },
  'umi-ts': {
    registry: 'realai-FE',
    template: 'umi-ts-template',
    branch: 'main'
  }
};
exports.REGISTRYS_MAP = REGISTRYS_MAP;
var ALLOW_TEMPLATES = Object.keys(REGISTRYS_MAP);
exports.ALLOW_TEMPLATES = ALLOW_TEMPLATES;