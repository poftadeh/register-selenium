const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const faker = require('faker');

let driver = new Builder()
    .forBrowser('chrome')
    // .setChromeOptions(
    //   new chrome.Options().headless())
    .build();

const automateRegistration = async () => {
  driver.get('http://google.com');
} 

const wait = async (seconds) => {
  return setTimeout(() => console.log("done"), seconds * 1000);
}

wait().then(() => {

  automateRegistration();
  
})

// const appURI = 'localhost:7080/nexj/SysPortal.htma?app=contact';
// const username = 'nexjsa';
// const password = process.argv[2];
// const appURL = `http://${username}:${password}@${appURI}`;
// const FRAME_ID = "IFRAME-refEntityNavigatorPortlet$1005D6CCC9B8CB464F8B5C7D62E31DD209";

// if (!password) throw new Error("No Password Provided!");

// driver.get(appURL)
//     // .then(_ =>
//     //     driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN))
//     // .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
//     .then(() => driver.get(appURL))
//     .then(() => driver.wait(until.elementLocated(By.css('.-ts-fast-web')), 10000))
//     .then(() => driver.findElement(By.css('#workspaceHostTabRow td:nth-child(3)')).click())
//     .then(() => driver.wait(until.elementLocated(By.css('iframe')), 10000))
//     .then(() => driver.switchTo().frame(FRAME_ID) && console.log("frameswitch"))
//     .then(() => driver.wait(until.elementLocated(By.css('input[name="_EntitySearch_txtFullTextSearch"]')), 10000))
//     .then(() => driver.findElement(By.css('input')).sendKeys('Bass'))
//     .then(() => driver.findElement(By.css('img[title="Find"')).click())
//     .then(() => driver.switchTo().frame("IFRAME-refEntityDetailPortlet$1005D6CCC9B8CB464F8B5C7D62E31DD209") && console.log("Switch back succeeded"))
//     .then(() => driver.wait(until.elementLocated(By.css('img[title="Edit"]')), 10000).click())
//     .then(() => driver.wait(until.elementLocated(By.css('textarea[name="frmNotes_inpNotes"]')).sendKeys("foo"), 10000))
//     .then(() => {
//       const used = process.memoryUsage().heapUsed / 1024 / 1024;
//       console.log(`The script uses approximately ${Math.round(used)} MB`);
//       console.log('waiting...');
//       return new Promise((resolve) => setTimeout(resolve, 2000));
//     })
//     .then(_ => driver.quit())
//     .catch((err) => console.log(err))
