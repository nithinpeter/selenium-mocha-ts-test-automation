var webDriver = require("../driver");
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var AccountPage = (function () {
    function AccountPage() {
        this.driver = webDriver.init();
    }
    AccountPage.prototype.isAt = function () {
        var welcomeContainer = this.driver.findElement(By.className("welcome-back-container"));
        return welcomeContainer;
    };
    return AccountPage;
})();
var accountPage = new AccountPage();
module.exports = accountPage;
