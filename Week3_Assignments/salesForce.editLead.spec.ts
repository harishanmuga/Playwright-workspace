import { test, expect } from "@playwright/test";

test(`Edit Lead - CRM`, async ({ page }) => {
    await page.goto("https://testleaf.my.salesforce.com/");
    await page.getByRole('textbox', { name: 'Username' }).fill("dilipkumar.rajendran@testleaf.com");
    await page.getByRole('textbox', { name: 'Password' }).fill("TestLeaf@2025");
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByTitle("App Launcher", { exact: true }).click();
    await page.locator('[aria-label="View All Applications"]').click();
    await page.getByPlaceholder("Search apps or items...", { exact: true }).fill("sales");
    await expect(page.getByRole("link", { name: 'Sales', exact: true })).toBeVisible();
    await page.getByRole("link", { name: 'Sales', exact: true }).click();
    await page.getByRole('link', { name: 'Leads' }).click();
    await page.getByRole('link',{name:'Saha1'}).click();
    await page.getByRole('button',{name:"Edit",exact:true}).click();
    await page.getByRole('textbox',{name:"Last Name"}).fill("Hari",{timeout:2000});
    await page.getByRole('button',{name:'Save',exact:true}).click();
    const leadName = await page.locator("//records-entity-label[text()='Lead']/following::lightning-formatted-name").innerText();
    await expect(leadName).toBe("Mr. Hari");
    console.log(`Lead ${leadName} has been updated successfully.`)
})