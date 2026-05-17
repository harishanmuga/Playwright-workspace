import { test, expect } from "@playwright/test";

test('Create Individual - CRM', async ({ page }) => {
    await page.goto("https://testleaf.my.salesforce.com/");
    await page.getByRole('textbox', { name: 'Username' }).fill("dilipkumar.rajendran@testleaf.com");
    await page.getByRole('textbox', { name: 'Password' }).fill("TestLeaf@2025");
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByTitle("App Launcher", { exact: true }).click();
    await page.locator('[aria-label="View All Applications"]').click();
    await page.locator("//p[text()='Individuals']").click();
    await page.getByRole('button', { name: "Individuals List" }).click();
    await page.locator("//span[text()='New Individual']").click();
    await page.getByRole('textbox', { name: "Last Name" }).fill("Hari");
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    const indName = await page.locator("//div[text()='Individual']/following-sibling::div/span").innerText();
    await expect(indName).toBe("Hari");
    console.log(`Individual ${indName} has been created successfully.`)

})