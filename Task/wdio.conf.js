// wdio.conf.js

exports.config = {
  runner: 'local',
  specs: [
    './test/**/*.js'
  ],
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome'
  }],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://qa-task.redvike.rocks/',
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  before: function () {
    browser.setWindowSize(1200, 800);
  }
}
