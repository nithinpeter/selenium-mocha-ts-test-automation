import driver = require("selenium-webdriver");

export class LoginPage {
	
	GoTo() {
		var driver1 = new driver.Builder().withCapabilities(driver.Capabilities.chrome()).build();
		driver1.get("http://www.google.com");
	}
}

var lp = new LoginPage().GoTo();
