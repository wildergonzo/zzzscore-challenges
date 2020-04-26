require('chromedriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
(async function main() {
  let driver = await new Builder().forBrowser('chrome').build();
  let isDisplayed = true;
  try {
    await driver.get('http://zzzscore.com/color/en/');
    do {
      try{
        await driver.wait(until.elementLocated(By.className('main')), 1000).click();
      } catch {
        isDisplayed = false;
      }
    } while (isDisplayed)
    let score = await driver.wait(until.elementLocated(By.css('div>.level')), 1000).getText();
    console.log(`score: ${score}`);
  } finally {
    await driver.quit();
  }
})();