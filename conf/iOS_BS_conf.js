require('dotenv').config()
console.log("BS_user is : " + process.env.BROWSERSTACK_USERNAME)
console.log("BS access key is : " + process.env.BROWSERSTACK_ACCESS_KEY)
console.log("BS app path is : " + process.env.BROWSERSTACK_APP_ID_iOS)

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY',

  updateJob: false,
  specs: ['./test/specs/**/*.js'],
  exclude: [],  

  capabilities: [{
    name: 'local_appium_test',
    build: 'webdriver-browserstack',
    device: 'iPhone XS',
    os_version: '12',
    app: process.env.BROWSERSTACK_APP_ID_iOS || 'bs://<hashed app-id>',
    // 'browserstack.local': true,
    'browserstack.debug': true,
    autoWebview: true
  }],

//   logLevel: 'verbose',
//   coloredLogs: true,
//   screenshotPath: './errorShots/',
//   baseUrl: '',
//   waitforTimeout: 10000,
//   connectionRetryTimeout: 90000,
//   connectionRetryCount: 3,
//   host: 'hub.browserstack.com',


  reporters: ['spec'],

  
  framework: 'jasmine',
  
  // By default, Jasmine times out within 10 seconds. This is not really enough time
  // for us as it takes a while for Appium to get set up.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 90000
  },
/**
   * Gets executed just before initializing the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  beforeSession: function () {
      require('expect-webdriverio')
    },
}