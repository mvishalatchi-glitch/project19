//WebTable
import { test,expect } from '@playwright/test'

test('Webtable Handling', async ({ page }) => {
await page.goto('https://qavbox.github.io/demo/webtable/')
const rowData = await page.locator('//table[@id="table02"]//tbody//tr[5]//td').allTextContents()
console.log(rowData)
await expect(rowData).toContain('Tokyo')
await expect(rowData).toEqual([ 'Airi Satou', 'Accountant', 'Tokyo', '33', '2008/11/28', '$162,700' ])
rowData.forEach(value => console.log(value))

const columnData = await page.locator('//table[@id="table02"]//tbody//tr//td[1]').allTextContents()
console.log(columnData)
await expect(columnData).toContain('Sonya Frost')
const data = await page.locator('//table[@id="table02"]//tbody//tr[5]//td[3]').textContent()
console.log(data)
})



 
