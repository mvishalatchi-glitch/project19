import { test } from '@playwright/test';

test('Frame Handling', async ({ page }) => {

    await page.goto('https://vinothqaacademy.com/iframe/');
    const singleFrame = page.frameLocator('//iframe[@name="employeetable"]');
    await singleFrame.locator('//input[@id="vfb-5"]').fill("VISHALATCHI");


});

