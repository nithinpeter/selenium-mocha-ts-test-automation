// var LoginPage = require("../pages/login_page");
var PostOneOffJobPage = require("../pages/job_one_off_page");
var test = require("selenium-webdriver/testing");
var assert = require("assert");
var driver = require("../driver");
var PostJobTests = (function () {
    function PostJobTests() {
    }
    PostJobTests.prototype.userCanPostOneOffJob = function () {
        test.describe('post one off job', function () {
            test.before(function () {
                PostOneOffJobPage.goTo();
                PostOneOffJobPage.onDate()
                    .fromTime()
                    .toTime()
                    .nextStep()
                    .selectHelper()
                    .nextStep()
                    .forAmount(22)
                    .nextStep()
                    .comment("I need a babysitter")
                    .post();
            });
            test.after(function () {
                // driver.close();
            });
            test.it('should post one off job', function () {
            });
        });
    };
    PostJobTests.prototype.userCanPostRecurringJob = function () {
    };
    return PostJobTests;
})();
var postJobTests = new PostJobTests();
postJobTests.userCanPostOneOffJob();
