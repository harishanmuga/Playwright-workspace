import {chromium, expect, test} from "@playwright/test"

test("Create Lead",async()=>{
    let inputFirName = 'Hari1'
    let comName = 'GAPP'
    let annRev = '800000'
    let dept = 'IT-Social'
    let desc = 'Updated.'
    const browser = await chromium.launch({channel:'msedge',headless:false,args:['--start-maximized']})
    const context = await browser.newContext({viewport:null,deviceScaleFactor: undefined})
    const page = await context.newPage()
    await page.goto(`https://leaftaps.com/opentaps/control/main`)
    await page.waitForTimeout(2000)
    await page.locator('#username').fill("democsr2")
    await page.locator('#password').fill("crmsfa")
    await page.locator('.decorativeSubmit').click()
    await page.waitForTimeout(2000)
    await console.log(`Page title is ${(await (page.title()))}`)
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()
    await page.waitForTimeout(2000)
    await console.log(`Page title is ${(await (page.title()))}`)
    await page.getByRole('link',{name:'Leads'}).click()
    await page.getByRole('link',{name:'Find Leads'}).click()
    await page.locator('(//input[@name="firstName"])[3]').fill(inputFirName)
    await page.getByRole('button',{name:'Find Leads'}).click()
    await page.locator(`(//a[text()="${inputFirName}"])[1]`).click()
    await page.getByRole('link',{name:'Edit'}).click()
    await page.locator('#updateLeadForm_companyName').fill(comName)
    await page.locator('#updateLeadForm_annualRevenue').fill(annRev)
    await page.locator('#updateLeadForm_departmentName').fill(dept)
    await page.locator('#updateLeadForm_description').fill(desc)
    await page.getByRole('button',{name:'Update'}).click()
    let cName = await page.locator('#viewLead_companyName_sp').innerText()
    let aRev = await page.locator('#viewLead_annualRevenue_sp').innerText()
    let digitOfRev = (aRev.replace(/\D/g, "")).substring(0,6)
    console.log(`Digits only from Annual revenue: ${digitOfRev}`)
    let dep = await page.locator('#viewLead_departmentName_sp').innerText()
    let des = await page.locator('#viewLead_description_sp').innerText()
    console.log(`Lead updated with the ${cName} ${aRev} ${dep} ${des}`)
    await expect.soft(cName).toContain(comName)
    await expect.soft(digitOfRev).toBe(annRev)
    await expect.soft(dep).toBe(dept)
    await expect.soft(des).toBe(desc)
})