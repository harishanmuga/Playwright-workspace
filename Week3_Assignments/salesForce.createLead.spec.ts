import {  expect, test } from "@playwright/test";

test(`Create Lead - CRM`, async({page})=>{
    await page.goto("https://testleaf.my.salesforce.com/");
    await page.getByRole('textbox',{name:'Username'}).fill("dilipkumar.rajendran@testleaf.com");
    await page.getByRole('textbox',{name:'Password'}).fill("TestLeaf@2025");
    await page.getByRole('button',{name:'Log in'}).click();
    await page.getByTitle("App Launcher",{exact:true}).click();
    await page.locator('[aria-label="View All Applications"]').click();
    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("sales");
    await expect(page.getByRole("link",{name:'Sales',exact:true})).toBeVisible();
    await page.getByRole("link",{name:'Sales',exact:true}).click();
    await page.getByRole('link',{name:'Leads'}).click();
    await expect(page.getByRole("button",{name:'New',exact:true})).toBeVisible();
    await page.getByRole('button',{name:'New'}).click();
    await page.getByRole('combobox',{name:"Salutation"}).click();
    await page.getByTitle('Mr.',{exact:true}).click();
    await page.getByRole('textbox',{name:"Last Name"}).fill("Saha1");
    await page.getByRole('textbox',{name:"Company"}).fill("US");
    await page.getByRole('button',{name:'Save',exact:true}).click();
    const leadName = await page.locator("//records-entity-label[text()='Lead']/following::lightning-formatted-name").innerText();
    await expect(leadName).toBe("Mr. Saha1");
    console.log(`Lead ${leadName} has been created successfully.`)
})