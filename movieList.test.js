const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

//Adding Movies
test('I can add some movies', async () => {
    await driver.findElement(By.xpath("//input")).sendKeys('Strange Brew')
    await driver.findElement(By.xpath('//button')).click();
    await driver.findElement(By.xpath("//input")).sendKeys('Mystery Men')
    await driver.findElement(By.xpath('//button')).click();
    await driver.findElement(By.xpath("//input")).sendKeys('Ready Player One')
    await driver.findElement(By.xpath('//button')).click();
    
//Crossing Off Movies
await driver.findElement(By.xpath('//span[contains(text(),"Strange Brew")]')).click();
await driver.findElement(By.xpath('//span[contains(text(),"Mystery Men")]')).click();
await driver.findElement(By.xpath('//span[contains(text(),"Ready Player One")]')).click();

//Deleting Movies
await driver.findElement(By.xpath('//li/span[text()="Strange Brew"]'))
    await driver.findElement(By.xpath('//li/button')).click();

    const movieMessage = await await driver.findElement(By.id('message'))
    expect(await movieMessage.isDisplayed()).toBeTruthy();

await driver.sleep(3000);
})