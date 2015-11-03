// conf.js
exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/e2e/spec.js'],
  multiCapabilities: [{
	    browserName: 'firefox'
	  }, {
	    browserName: 'chrome'
	  }]
};