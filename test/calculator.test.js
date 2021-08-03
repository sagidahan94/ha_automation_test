const calculatepage = require("../pages/calculatepage");

describe("Check google calculator", () => {
  beforeAll(() => {
    console.log("Tests begin");
  });

  afterAll(() => {
    console.log("Tests finished");
    calculatepage.quit().catch((err) => console.log(err));
  });

  it("check two number addition (5+10)", async () => {
    var google_calc_url = "https://www.google.co.il/search?q=google+calculator";
    await calculatepage
      .open_calc(google_calc_url)
      .catch((err) => console.log(err))
      .catch((err) => console.log(err));
    await calculatepage.click_number(5).catch((err) => console.log(err));
    await calculatepage.click_operator("+").catch((err) => console.log(err));
    await calculatepage.click_ten().catch((err) => console.log(err));
    await calculatepage.click_operator("=").catch((err) => console.log(err));
    let googleCalcResult = await calculatepage
      .get_result()
      .catch((err) => console.log(err));
    expect(googleCalcResult).toBe(15);
  });

  it("Check number of buttons in calculator", async () => {
    let numOfButtons = await calculatepage
      .get_number_of_buttons()
      .catch((err) => console.log(err));
    expect(numOfButtons).toBe(34);
  });

  it("Check number of numeric buttons in calculator", async () => {
    let numOfNumericButtons = await calculatepage
      .get_number_of_numeric_buttons()
      .catch((err) => console.log(err));
    expect(numOfNumericButtons).toBe(10);
  });
});
