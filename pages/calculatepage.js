const { Key, By, Builder, until } = require("selenium-webdriver");
var BasePage = require("../pages/basepage");

class CalculatePage extends BasePage {
  async click_number(number_to_click) {
    let numberButton = await driver.findElement(
      By.xpath(`//*[@class='XRsWPe AOvabd' and .='${number_to_click}']`)
    );
    await numberButton.click();
  }

  async click_operator(operator_to_click) {
    const xpath = `//*[text()='${operator_to_click}']`;
    let operatorButton = await driver.findElement(By.xpath(xpath));
    await operatorButton.click();
  }

  async click_ten() {
    await this.click_number(1);
    await this.click_number(0);
  }

  async get_result() {
    let res = await driver.findElement(By.id("cwos"));
    let resultAsText = await res.getText();
    return parseInt(resultAsText);
  }

  async get_number_of_buttons() {
    let buttons = await driver.findElements(
      By.xpath(
        "//*[@class='PaQdxb UpZIS' or @class='PaQdxb A2W7l' or @class='PaQdxb mF5fo' or @class='PaQdxb mF5fo G7BHUb']"
      )
    );
    return buttons.length;
  }

  async get_number_of_numeric_buttons() {
    let numericbButtons = await driver.findElements(
      By.xpath("//*[@class='XRsWPe AOvabd' and not(@jsname='YrdHyf')]")
    );
    return numericbButtons.length;
  }

  async quit() {
    driver.quit();
  }
}

module.exports = new CalculatePage();
