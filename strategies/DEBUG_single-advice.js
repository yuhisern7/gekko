var settings = {
  wait: 0,
  advice: 'short'
  // advice: 'long'
};

// -------

var _ = require('lodash');
var log = require('../core/log.js');

var i = 0;

var method = {
  init: _.noop,
  update: _.noop,
  log: _.noop,
  check: function() {

    log.info('iteration:', i);
    if(settings.wait === i) {
      console.log('trigger advice!');
      this.advice(settings.advice);
    }

    i++

  }
};

module.exports = method;