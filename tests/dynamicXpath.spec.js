import { test } from '@playwright/test';
test('dynamicXpath', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.flipkart.com/')
    await page.locator ('(//input[@title="Search for products, brands and more"])').fill('iphone 17 pro')
    await page.keyboard.press('Enter')
    
    const [newPage] = await Promise.all([context.waitForEvent('page'),
    page.click('//div[text()="Relevance"]//ancestor::div[@class="QSCKDh dLgFEE"]//following-sibling::div[@class="lvJbLV col-12-12"]//descendant::div[text()="Apple iPhone 17 Pro (Silver, 256 GB)"]')])
    
    await newPage.waitForLoadState()
    
    const title = await newPage.title()
    console.log(title)
})