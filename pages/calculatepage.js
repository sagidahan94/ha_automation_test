const { Key, By, Builder, until } = require("selenium-webdriver");
var BasePage = require("../pages/basepage");

class CalculatePage extends BasePage {
  async click_number(number_to_click) {
    let numberButton = await driver
      .findElement(
        By.xpath(`//*[@class='XRsWPe AOvabd' and .='${number_to_click}']`)
      )
      .catch((err) => console.log(err));
    await numberButton.click().catch((err) => console.log(err));
  }

  async click_operator(operator_to_click) {
    const xpath = `//*[text()='${operator_to_click}']`;
    let operatorButton = await driver
      .findElement(By.xpath(xpath))
      .catch((err) => console.log(err));
    await operatorButton.click().catch((err) => console.log(err));
  }

  async click_ten() {
    await this.click_number(1).catch((err) => console.log(err));
    await this.click_number(0).catch((err) => console.log(err));
  }

  async get_result() {
    let res = await driver
      .findElement(By.id("cwos"))
      .catch((err) => console.log(err));
    let resultAsText = await res.getText().catch((err) => console.log(err));
    return parseInt(resultAsText);
  }

  async get_number_of_buttons() {
    let buttons = await driver
      .findElements(
        By.xpath(
          "//*[@class='PaQdxb UpZIS' or @class='PaQdxb A2W7l' or @class='PaQdxb mF5fo' or @class='PaQdxb mF5fo G7BHUb']"
        )
      )
      .catch((err) => console.log(err));
    return buttons.length;
  }

  async get_number_of_numeric_buttons() {
    let numericbButtons = await driver
      .findElements(
        By.xpath("//*[@class='XRsWPe AOvabd' and not(@jsname='YrdHyf')]")
      )
      .catch((err) => console.log(err));
    return numericbButtons.length;
  }

  async quit() {
    driver.quit().catch((err) => console.log(err));
  }
}

module.exports = new CalculatePage();
