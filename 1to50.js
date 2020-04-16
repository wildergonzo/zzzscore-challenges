require('chromedriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function main() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://zzzscore.com/1to50/en/');
    for(let i = 1; i <= 50; i++) {
      await driver.findElement(By.xpath(`//div[text()=${i}]`)).click();
    }
    await driver.sleep(1000);
  } finally {
    await driver.quit();
  }
})();
