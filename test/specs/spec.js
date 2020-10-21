const DashBoardPage = require('../pageobjects/dashBoard.page');
const expect = require("chai").expect;

describe('Test toggle button', () => {

	it('should show the buton and text by default', () => {
		console.log(browser.getContext());
		expect(DashBoardPage.$toggleButton.isDisplayed()).to.equal(true);
		expect(DashBoardPage.getLabelText()).to.equal('HELLO! THIS IS AN APPIUM TEST.');
	});

	it('should hide the text when the toggle button is clicked', () => {
		DashBoardPage.$toggleButton.click();
		expect(DashBoardPage.getLabelText()).to.equal('');
	});

	it('should show the text when the toggle button is clicked', () => {
		DashBoardPage.$toggleButton.click();
		expect(DashBoardPage.getLabelText()).to.equal('HELLO! THIS IS AN APPIUM TEST.');
	});

});