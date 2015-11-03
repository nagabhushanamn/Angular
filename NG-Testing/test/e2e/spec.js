// spec.js
describe('Protractor Demo App', function() {
  
	var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));

  beforeEach(function() {
    browser.get('http://localhost:8080/index.html');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    firstNumber.sendKeys(10);
    secondNumber.sendKeys(20);

    goButton.click();

    expect(latestResult.getText()).toEqual('30');
  });

  it('should add four and six', function() {
    // Fill this in.
    expect(latestResult.getText()).toEqual('0');
  });
  
});