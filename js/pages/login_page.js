var driver = require("selenium-webdriver");
var LoginPage = (function () {
    function LoginPage() {
    }
    LoginPage.prototype.GoTo = function () {
        var driver1 = new driver.Builder().withCapabilities(driver.Capabilities.chrome()).build();
        driver1.get("http://www.google.com");
    };
    return LoginPage;
})();
exports.LoginPage = LoginPage;
var lp = new LoginPage().GoTo();
