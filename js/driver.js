var webDriver = require("selenium-webdriver");
var Driver = (function () {
    function Driver() {
        this.instance = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();
    }
    Driver.prototype.init = function () {
        this.instance.manage().timeouts().implicitlyWait(5000);
        return this.instance;
    };
    return Driver;
})();
module.exports = new Driver();
