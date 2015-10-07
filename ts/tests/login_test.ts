var LoginPage = require("../pages/login_page");
var AccountPage = require("../pages/account_page");
var test = require("selenium-webdriver/testing");
var assert = require("assert");

class LoginTests {
	UserCanLogin() {
		var atAccountPage;
		test.describe('can user login', function() {

			test.before(function() {
				LoginPage.GoTo();
				LoginPage.OpenLoginModal();
				LoginPage.EnterEmail("nithinpeter7@gmail.com");
				LoginPage.EnterPassword("malayalam");
				LoginPage.Submit();

				// setTimeout(function() {
				atAccountPage = AccountPage.isAt();
				// }, 15000) 
			})

			test.it('should login', function() {

				// atAccountPage.then(function(el) {
				// 	console.log("length" + el.length)
				// 	assert.equal(el.length > 0, true);
				// });
				assert.equal(atAccountPage, true);

			});
		});
	}
}

var loginTests = new LoginTests();

loginTests.UserCanLogin();

