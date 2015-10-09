var webDriver = require("../driver");
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var AccountPage = (function () {
    function AccountPage() {
        this.driver = webDriver.init();
    }
    // Refactor: can we have generalized isAt for all pages?
    AccountPage.prototype.isAt = function () {
        var driver = this.driver;
        var isDisplayed = driver.wait(function () {
            return driver.findElement(By.className("welcome-back-container")).isDisplayed();
        });
        return isDisplayed;
    };
    return AccountPage;
})();
var accountPage = new AccountPage();
module.exports = accountPage;
