var webDriver = require("selenium-webdriver");

class Driver {
	instance;
	
	constructor() {
		this.instance = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build(); 		
	}
	
	init() {
		this.instance.manage().timeouts().implicitlyWait(5000);
		return this.instance;
	}
	
	close() {
		this.instance.quit();
	}
}

export = new Driver();