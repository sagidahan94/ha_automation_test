// const { Key, By, Builder, until } = require("selenium-webdriver");
const calculatepage = require("../pages/calculatepage");
// var webdriver = require("selenium-webdriver");
// var driver = new webdriver.Builder().forBrowser("chrome").build();
// driver.manage().setTimeouts({ implicit: 10000 });

describe("Check google calculator", () => {
  beforeEach(() => {
    //   var google_calc_url = "https://www.google.co.il/search?q=google+calculator";
    //   calculatepage.open_calc(google_calc_url);
    //   this.setTimeout(() => {
    //   }, 5000);
  });

  afterEach(() => {
    // calculatepage.quit();
  });

  it("check two number addition", async () => {
    var google_calc_url = "https://www.google.co.il/search?q=google+calculator";
    await calculatepage.open_calc(google_calc_url);
    await calculatepage.click_five();
    await calculatepage.click_plus();
    await calculatepage.click_ten();
    await calculatepage.click_equal();
    let googleCalcResult = await calculatepage.get_result();
    expect(googleCalcResult).toBe(15);
  });

  it("Check number of buttons in calculator", async () => {});

  it("Check number of numeric buttons in calculator", async () => {});
});
