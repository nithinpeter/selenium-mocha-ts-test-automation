var webDriver = require("../driver");
var By = require('selenium-webdriver').By;


class AccountPage {

	driver;

	constructor() {
		this.driver = webDriver.init();
	}

	// Refactor: can we have generalized isAt for all pages?
	isAt() {
		var driver = this.driver;
		var isDisplayed = driver.wait(function() {
			return driver.findElement(By.className("welcome-back-container")).isDisplayed();
		})
				
		return isDisplayed;
	}
}

var accountPage = new AccountPage();

export = accountPage;