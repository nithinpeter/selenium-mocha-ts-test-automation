var webDriver = require("../driver");
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;


class AccountPage {

	driver;

	constructor() {
		// this.driver = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();
		this.driver = webDriver.init();
	}

	
	isAt() {
		
		this.driver.wait(webDriver.until.elementLocated(By.className('welcome-back-container')), 10000);
		
		var welcomeContainer = this.driver.findElements(By.className("welcome-back-container"));
		
		console.log("inside is at")
		// console.trace();
		// console.log(welcomeContainer)
		if( welcomeContainer.count > 0 ) {
			return true;
		}
		
		return false; 
		// return welcomeContainer;
	}
	
	
}

var accountPage = new AccountPage();

export = accountPage;