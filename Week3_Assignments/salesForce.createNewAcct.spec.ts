import { chromium, test, expect } from "@playwright/test";

test(`Create New Account`, async()=>{
    let expTitle = 'Home | Salesforce'
    let expUrl = 'https://testleaf.lightning.force.com/lightning/page/home'
    const browser = await chromium.launch({headless:false,channel:'msedge',args:['--start-maximized']})
    const browserContext = await browser.newContext({viewport:null,deviceScaleFactor:undefined})
    const page = await browserContext.newPage()
    await page.goto('https://login.salesforce.com/')
    await page.getByLabel('Username').fill('dilipkumar.rajendran@testleaf.com')
    await page.getByLabel('Password').fill('TestLeaf@2025')
    await page.getByRole('button',{name:'Log In'}).click()
    await page.waitForTimeout(8000)
    await expect(page.locator('//button[@class="slds-button slds-context-bar__button slds-icon-waffle_container slds-show"]')).toBeVisible()
    let title = await page.title()
    let url = await page.url()
    console.log(`Title: ${title} \nEndpoint: ${url}`)
    await expect(title).toBe(expTitle)
    await expect(url).toBe(expUrl)
    await page.locator('//button[@class="slds-button slds-context-bar__button slds-icon-waffle_container slds-show"]').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.getByPlaceholder('Search apps or items...').fill('Service')
    await page.locator('(//a[@class="slds-text-heading_small"])[1]').click()
    await expect(page.locator('[title="Accounts"]')).toBeVisible()
    await page.locator('[title="Accounts"]').click()
    await page.getByRole('button',{name:'New'}).click()
    await page.locator('[name="Name"]').fill('Test1')
    await page.locator('//button[@name="SaveEdit"]').click()
    // toast message validation - need to check.
    await expect(page.locator('//span[text()="Account"]')).toBeVisible()
    console.log(`Result: ${await page.locator('//span[text()="Account"]').innerText()}`)
})