import{test,chromium,firefox} from "@playwright/test"

test("Launch URL with MSEDGE", async()=>{
    const browser = await chromium.launch({channel:"msedge"})
    let context = await browser.newContext()
    let page = await context.newPage()

    await page.goto("https://www.redbus.in/")
    let title = await page.title()
    let url = await page.url()
    console.log(`Page title is ${title} and URL=${url}`)
})

test("Launch URL with Firefox", async()=>{
    const browser = await firefox.launch()
    let context = await browser.newContext()
    let page = await context.newPage()

    await page.goto("https://www.flipkart.com")
    let title = await page.title()
    let url = await page.url()
    console.log(`Page title is ${title} and URL=${url}`)
})