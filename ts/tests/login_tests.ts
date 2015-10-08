var LoginPage = require("../pages/login_page");
var AccountPage = require("../pages/account_page");
var test = require("selenium-webdriver/testing");
var assert = require("assert");

class LoginTests {
	UserCanLogin() {
		var atAccountPage;
		test.describe('can user login', function() {

			test.before(function() {

				LoginPage.GoTo()
				LoginPage.OpenLoginModal()
					.EnterEmail("nithinpeter7@gmail.com")
					.EnterPassword("malayalam")
					.Submit().then(function() {
						atAccountPage = AccountPage.isAt();
					});
			})

			test.it('should login', function() {
				
				atAccountPage.isDisplayed().then(function(val) {
					assert.equal(val, true);
				})
			});
		});
	}
}

var loginTests = new LoginTests();

loginTests.UserCanLogin();

