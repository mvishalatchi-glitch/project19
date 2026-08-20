import { test } from '@playwright/test'
import { LoginPage } from '../page/LoginPage'

test('Page Object Model', async ({ page }) => {
    const login = new LoginPage(page)

    await login.visitUrl()
    await login.enterUsername()
    await login.enterPassword()
    await login.clickButton()

})