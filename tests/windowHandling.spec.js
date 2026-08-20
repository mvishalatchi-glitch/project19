import { test } from '@playwright/test';

test('dynamic xpath', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.flipkart.com/');

    await page.locator('(//input[@title="Search for Products, Brands and More"])[1]')
        .fill('iphone 17 pro');

    await page.keyboard.press('Enter');

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),

        page.click('//div[text()="Relevance"]//ancestor::div[@class="QSCKDh eRsYMo col-12-12"]//following-sibling::div[@class="lvJbVL col-12-12"//descendant::div[text()="Apple iPhone 17 Pro (Deep Blue, 512 GB)"])
    ]);

    await newPage.waitForLoadState();

    const title = await newPage.title();

    console.log(title);
});