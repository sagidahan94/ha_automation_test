var webdriver = require("selenium-webdriver");
var driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().setTimeouts({ implicit: 10000 });

class BasePage {
  constructor() {
    global.driver = driver;
  }

  async open_calc(url) {
    await driver.get(url);
  }
}

module.exports = BasePage;
