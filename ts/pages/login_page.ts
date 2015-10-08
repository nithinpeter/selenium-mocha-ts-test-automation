// var webDriver = require("selenium-webdriver");
var webDriver = require("../driver");
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;


class LoginPage {

	driver;

	constructor() {
		// this.driver = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();
		this.driver = webDriver.init();
		
	}

	GoTo() {
		this.driver.get("https://dw.jugglestreet.com/");
	}

	OpenLoginModal() {
		var loginButton = this.driver.findElement(By.className("login-button"));
		loginButton.click();
		return this;
	}

	EnterEmail(userId) {
		var loginForm = this.driver.findElement(By.className("dialog"));
		var userIdTextbox = loginForm.findElement(By.xpath("//input[@type='email']"));

		userIdTextbox.sendKeys(userId);
		return this;
	}

	EnterPassword(password) {
		var loginForm = this.driver.findElement(By.className("dialog"));
		var passwordTextbox = loginForm.findElement(By.xpath("//input[@type='password']"));

		passwordTextbox.sendKeys(password);
		return this;
	}
	
	Submit() {
		var loginForm = this.driver.findElement(By.className("dialog"));
		var submitButton = loginForm.findElement(By.xpath("//button[contains(text(),'Login')]"));
		
		return submitButton.click();
		// return this;
	}
	
	
	
	
}

var loginPage = new LoginPage();

export = loginPage;