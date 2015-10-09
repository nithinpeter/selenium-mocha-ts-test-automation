// var webDriver = require("selenium-webdriver");
var webDriver = require("../driver");
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var LoginPage = (function () {
    function LoginPage() {
        // this.driver = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();
        this.driver = webDriver.init();
    }
    LoginPage.prototype.goTo = function () {
        this.driver.get("https://dw.jugglestreet.com/");
    };
    LoginPage.prototype.openLoginModal = function () {
        var loginButton = this.driver.findElement(By.className("login-button"));
        loginButton.click();
        return this;
    };
    LoginPage.prototype.enterEmail = function (userId) {
        var loginForm = this.driver.findElement(By.className("dialog"));
        var userIdTextbox = loginForm.findElement(By.xpath("//input[@type='email']"));
        userIdTextbox.sendKeys(userId);
        return this;
    };
    LoginPage.prototype.enterPassword = function (password) {
        var loginForm = this.driver.findElement(By.className("dialog"));
        var passwordTextbox = loginForm.findElement(By.xpath("//input[@type='password']"));
        passwordTextbox.sendKeys(password);
        return this;
    };
    LoginPage.prototype.submit = function () {
        var loginForm = this.driver.findElement(By.className("dialog"));
        var submitButton = loginForm.findElement(By.xpath("//button[contains(text(),'Login')]"));
        submitButton.click();
        return this;
    };
    return LoginPage;
})();
var loginPage = new LoginPage();
module.exports = loginPage;
