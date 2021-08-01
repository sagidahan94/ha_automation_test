const { Key, By, Builder, until } = require("selenium-webdriver");
var BasePage = require("../pages/basepage");
var webdriver = require("selenium-webdriver");

class CalculatePage extends BasePage {
  async click_five() {
    let fiveButton = await driver.findElement(By.xpath("//*[text()='5']"));
    await fiveButton.click();
  }

  async click_plus() {
    let plusButton = await driver.findElement(By.xpath("//*[text()='+']"));
    await plusButton.click();
  }

  async click_ten() {
    let oneButton = await driver.findElement(By.xpath("//*[text()='1']"));
    await oneButton.click();
    let zeroButton = await driver.findElement(By.xpath("//*[text()='0']"));
    await zeroButton.click();
  }

  async click_equal() {
    let equalButton = await driver.findElement(By.xpath("//*[text()='=']"));
    await equalButton.click();
  }
  async get_result() {
    let res = await driver.findElement(By.id("cwos"));
    let resultAsText = await res.getText();
    return parseInt(resultAsText);
  }

  async quit() {
    driver.quit();
  }
}

module.exports = new CalculatePage();
