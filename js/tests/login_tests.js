var LoginPage = require("../pages/login_page");
var AccountPage = require("../pages/account_page");
var test = require("selenium-webdriver/testing");
var assert = require("assert");
var driver = require("../driver");
var LoginTests = (function () {
    function LoginTests() {
    }
    LoginTests.prototype.userCanLogin = function () {
        var atAccountPage;
        test.describe('can user login', function () {
            test.before(function () {
                // Refactor: if multiple tests are gonna use login, this should go into a base class.
                LoginPage.goTo();
                LoginPage.openLoginModal()
                    .enterEmail("nithinpeter7@gmail.com")
                    .enterPassword("malayalam")
                    .submit();
            });
            // Refactor: can we move cleanup logic to a base class?
            test.after(function () {
                // driver.close();
            });
            test.it('should login', function () {
                AccountPage.isAt().then(function (isAt) {
                    assert.equal(isAt, true);
                });
            });
        });
    };
    return LoginTests;
})();
var loginTests = new LoginTests();
loginTests.userCanLogin();
