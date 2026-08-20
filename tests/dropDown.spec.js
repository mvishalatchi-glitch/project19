import { test } from '@playwright/test'

test('dropdownHandling', async ({ page }) => {

  await page.goto('https://letcode.in/dropdowns/')
  const singleDrop = await page.locator('//select[@id="fruits"]')
  await singleDrop.selectOption({ value: "1" })
  const fruit = await singleDrop.locator('option:checked').textContent()
  console.log(fruit)

  const multiDrop = await page.locator('//select[@id="superheros"]')
  await multiDrop.selectOption([{ label: "Hellboy" },{ value: "5" },{ index: 5 },{ label: "Spider-Man" },{ label: "Daredevil" }
  ])
  const superHeros = await multiDrop.locator('option:checked').allTextContents()
  console.log(superHeros)
})

