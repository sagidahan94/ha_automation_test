const calculatepage = require("../pages/calculatepage");

describe("Check google calculator", () => {
  beforeAll(() => {
    console.log("Tests begin");
  });

  afterAll(() => {
    console.log("Tests finished");
    calculatepage.quit();
  });

  it("check two number addition (5+10)", async () => {
    var google_calc_url = "https://www.google.co.il/search?q=google+calculator";
    await calculatepage.open_calc(google_calc_url);
    await calculatepage.click_number(5);
    await calculatepage.click_operator("+");
    await calculatepage.click_ten();
    await calculatepage.click_operator("=");
    let googleCalcResult = await calculatepage.get_result();
    expect(googleCalcResult).toBe(15);
  });

  it("Check number of buttons in calculator", async () => {
    let numOfButtons = await calculatepage.get_number_of_buttons();
    expect(numOfButtons).toBe(34);
  });

  it("Check number of numeric buttons in calculator", async () => {
    let numOfNumericButtons =
      await calculatepage.get_number_of_numeric_buttons();
    expect(numOfNumericButtons).toBe(10);
  });
});
