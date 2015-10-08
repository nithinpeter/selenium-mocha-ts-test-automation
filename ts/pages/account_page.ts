var webDriver = require("../driver");
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;


class AccountPage {

	driver;

	constructor() {
		this.driver = webDriver.init();
	}

	
	isAt() {
		console.log("is at")
		var welcomeContainer = this.driver.findElement(By.className("welcome-back-container"));
		
		return welcomeContainer;
	}
}

var accountPage = new AccountPage();

export = accountPage;