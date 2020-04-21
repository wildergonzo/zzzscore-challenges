require('chromedriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function main() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    const pictures = ['birthday-cake', 'bolt', 'bomb', 'book', 'car', 'coffee', 'cube', 'cubes'];
    await driver.get('http://zzzscore.com/memory/en/');
    await driver.wait(until.elementLocated(By.css('span[style="display: none;"]')), 4000);

    await pictures.forEach(async (img) => {
      let elements = await driver.findElements(By.xpath(`//span[@class="fa fa-${img}"]/..`));
      await Promise.all(elements.map(async (elm) => await elm.click()));
    });

    let score = await driver.wait(until.elementLocated(By.css('div>.level')),1000).getText();
    console.log(`score: ${score}`);

  } finally {
    await driver.quit();
  }
})();