var webDriver = require("../driver");
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;


class AccountPage {

	driver;

	constructor() {
		this.driver = webDriver.init();
	}

	goTo() {
		var leftNav = this.driver.findElement(By.className("menu"));
		var postJobLink = leftNav.findElement(By.linkText("Find a Babysitter"));
		postJobLink.click();
	}

	onDate() {
		var form = this.driver.findElement(By.className("form"));
		var dateField = form.findElement(By.tagName("input"));
		dateField.click();
		
		// var datePickerToolbar = this.driver.findElement(By.className("mui-date-picker-calendar-toolbar"));
		// var nextButton = datePickerToolbar.findElements(By.tagName("div"))[2];
		// nextButton.click();
		var dateBtn = this.driver.findElement(By.xpath("/html/body/div[1]/div[4]/div/div/div[2]/div/div/div[1]/div[1]/div[2]/div[1]/div/div/div[1]/div/div[3]/div[2]/div/div/div[2]/button[7]"));
		dateBtn.click();

		return this;
	}

	fromTime() {
		//Todo
		return this;
	}

	toTime() {
		//Todo
		return this;
	}

	nextStep() {
		this.driver.sleep(2000);
		
		var nextBtn = this.driver.findElement(By.className("button"));
		nextBtn.click();
		
		this.driver.sleep(2000);
		
		return this;
	}

	selectHelper() {
		var helper = this.driver.findElement(By.xpath('//*[@id="2178"]'));
		helper.click();

		return this;
	}

	forAmount(amount) {
		var form = this.driver.findElement(By.className("form"));
		var amountField = form.findElement(By.xpath("//input[@type='text']"));
		amountField.sendKeys(amount);
		
		return this;
	}

	comment(comment) {
		var form = this.driver.findElement(By.className("form"));
		var commentsField = form.findElement(By.tagName("textarea"));
		commentsField.sendKeys(comment);
		
		return this;
	}
	
	post() {
		this.nextStep();
	}
}

var accountPage = new AccountPage();

export = accountPage;