import { test } from '@playwright/test'

test('Frame Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html')

    const singleframe = await page.frameLocator('//iframe[@id="singleframe"]')
    await singleframe.locator('//input[@type="text"]').fill('Hi Buddy')

    await page.locator('(//a[@class="analystic"])[2]').click()

    const outerframe = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const innerframe = await outerframe.frameLocator('//iframe[@src="SingleFrame.html"]')

    await innerframe.locator('//input[@type="text"]').fill("Hello Buddy")
})