import { test, expect } from '@playwright/test';

test('Alert Handling', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Alerts.html');

    // Simple Alert
    await page.once('dialog', async (dialog) => {
        await dialog.accept();
        console.log("Simple Alert:", dialog.message());
    });

    await page.locator('//button[@onclick="alertbox()"]').click();

    // Confirmation Alert
    await page.locator('(//a[@class="analystic"])[2]').click();

    await page.once('dialog', async (dialog) => {
        await dialog.dismiss();
        console.log("Confirmation Alert:", dialog.message());
    });

    await page.locator('//button[@onclick="confirmbox()"]').click();

    // Prompt Alert
    await page.locator('(//a[@class="analystic"])[3]').click();

    await page.once('dialog', async (dialog) => {
        await dialog.accept("Hello Bro");
        console.log("Prompt Alert:", dialog.message());
    });

    await page.locator('//button[@onclick="promptbox()"]').click();

    const text = await page.locator('//p[@id="demo1"]').textContent();

    console.log(text);

    await expect(text).toContain("Hello Dude");

});