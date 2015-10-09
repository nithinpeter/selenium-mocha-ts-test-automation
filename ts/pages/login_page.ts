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

	goTo() {
		this.driver.get("https://dw.jugglestreet.com/");
	}

	openLoginModal() {
		var loginButton = this.driver.findElement(By.className("login-button"));
		loginButton.click();
		return this;
	}

	enterEmail(userId) {
		var loginForm = this.driver.findElement(By.className("dialog"));
		var userIdTextbox = loginForm.findElement(By.xpath("//input[@type='email']"));

		userIdTextbox.sendKeys(userId);
		return this;
	}

	enterPassword(password) {
		var loginForm = this.driver.findElement(By.className("dialog"));
		var passwordTextbox = loginForm.findElement(By.xpath("//input[@type='password']"));

		passwordTextbox.sendKeys(password);
		return this;
	}
	
	submit() {
		var loginForm = this.driver.findElement(By.className("dialog"));
		var submitButton = loginForm.findElement(By.xpath("//button[contains(text(),'Login')]"));
		
		submitButton.click();
		return this;
	}
	
	
	
	
}

var loginPage = new LoginPage();

export = loginPage;