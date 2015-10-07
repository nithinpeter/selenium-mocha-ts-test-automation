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
	}

	EnterEmail(userId) {
		var loginForm = this.driver.findElement(By.className("dialog"));
		var userIdTextbox = loginForm.findElement(By.xpath("//input[@type='email']"));

		userIdTextbox.sendKeys(userId);
	}

	EnterPassword(password) {
		var loginForm = this.driver.findElement(By.className("dialog"));
		var passwordTextbox = loginForm.findElement(By.xpath("//input[@type='password']"));

		passwordTextbox.sendKeys(password);
	}
	
	Submit() {
		var loginForm = this.driver.findElement(By.className("dialog"));
		var submitButton = this.driver.findElement(By.xpath("//button[contains(text(),'Login')]"));
		
		submitButton.click();
	}
	
	
}

var loginPage = new LoginPage();

export = loginPage;