import { test, expect } from '@playwright/test';
test('Valaidate the form', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
     await page.locator('//input[@id="name"]').fill("VISHALATCHI")
    await page.locator('//input[@id="email"]').fill('mvishalatchi@gmail.com')
    await page.locator('//input[@id="phone"]').fill('9486899966')
    await page.locator('//textarea[@id="textarea"]').fill('Viveka Street, Ch - 600029')
     


