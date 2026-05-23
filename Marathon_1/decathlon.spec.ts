import { expect, test } from "@playwright/test";

test(`PVR Cinemas`, async ({ page }) => {
    await page.goto('https://www.decathlon.in/')
    await page.waitForTimeout(5000)
    if (await page.locator('//input[@type="search"]').isEnabled()) {
        //await page.locator('//input[@type="search"]').click()
        await page.locator('//input[@type="search"]').fill("shoes")
        await page.keyboard.press('Enter')
    }
    await expect(page.locator('//span[text()="Category"]')).toBeVisible()
    console.log(await page.title())
    await page.locator('//span[text()="Category"]').click()
    await page.locator('//span[text()="Sport shoes"]').click()
    await page.locator('//span[text()="Gender"]').click()
    await page.locator('(//span[text()="Men"])[2]').click()
    await page.locator('//span[text()="Size"]').click()
    await page.locator('//span[text()="Uk 10.5 - eu 45"]').click()
    await page.getByText('Most relevant',{exact:true}).click()
    await page.getByRole('option',{name:'Price (high → low)'}).click()
    await page.locator('(//div[@data-test-id="search-products-grid"]//a)[1]').click()
    

})