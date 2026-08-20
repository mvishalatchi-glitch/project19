import { test } from '@playwright/test'

test('validate login functionlity', async ({ page }) => {

    await page.goto("https://www.instagram.com/")
    await page.locator('//input[@id="username"]').fill('samplename')
    await page.locator('//input[@name="password"]').fill('password')
    await page.locator('//button[text()="login"]').click()

})

// class locator --------> // body[@class="_ar45 system-fonts--body segoe"]