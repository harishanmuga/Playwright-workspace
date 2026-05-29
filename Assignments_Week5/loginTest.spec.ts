import { test } from "@playwright/test"

import {LoginPage} from "./login"

test(`Login page test`,async({page,context})=>{

    const loginPageObj = new LoginPage(page)
    await loginPageObj.loadUrl('https://login.salesforce.com/?locale=in')
    await loginPageObj.enterUsername('dilipkumar.rajendran@testleaf.com')
    await loginPageObj.enterPassword('TestLeaf@2025')
    await loginPageObj.clickLogin()
    await page.waitForTimeout(3000)

})