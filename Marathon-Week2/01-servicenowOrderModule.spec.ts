import {test,expect} from "@playwright/test"
test ("Marathon - Service Now Order Module",async({page})=>{
    await page.goto('https://dev224996.service-now.com/login');
    await page.locator('#user_name').fill('admin');
    await page.locator('#user_password').fill('a4tsEAZx+3M+');
    await page.getByRole('button',{name:"Log in"}).click();
    await page.waitForLoadState("domcontentloaded");
    const homePageTitle = await page.title();
    expect.soft(homePageTitle).toContain("ServiceNow");
    await page.getByRole('menuitem',{name:"All"}).click();
    await page.getByPlaceholder('Filter',{exact:true}).fill("Service Catalog");
    await page.waitForTimeout(3000)
    await page.getByText('Service Catalog', { exact: true }).first().click();
    await page.waitForTimeout(3000)
    const framecount = await page.locator("iframe").count();
    console.log(`total frames couts: ${framecount}`);
    const iFrameObj = page.frameLocator('iframe#gsft_main')
    await iFrameObj.locator('//a[text()="Mobiles"]').click();
    await page.waitForTimeout(3000);
    await iFrameObj.getByText('Apple iPhone 13',{exact:true}).click();
    await iFrameObj.locator('//label[text()="No"]').click();
    await iFrameObj.locator('//select[@class="form-control cat_item_option "]').selectOption("500MB")
    const dataAllowanceCount = iFrameObj.locator('//select[@class="form-control cat_item_option "]/option');
    console.log(`Total number of options available for Monthly Data Allowance is ${dataAllowanceCount.count()}`);
    await expect(iFrameObj.locator('//label[text()="Starlight"]')).toBeVisible();
    await iFrameObj.locator('//label[text()="Starlight"]').click();
    await expect(iFrameObj.locator('//label[text()="256 GB [add $100.00]"]')).toBeVisible();
    await iFrameObj.locator('//label[text()="256 GB [add $100.00]"]').click();
    await iFrameObj.locator('//button[text()="Order Now"]').click();
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(5000);
    const pageTitle = await page.title();
    console.log(`Title of the page is ${pageTitle}`);
    const pageURL = page.url();
    console.log(`URL of the page is ${pageURL}`);
    expect.soft(pageTitle).toContain("Order Status:");
    expect(pageURL).toContain("https://dev224996.service-now.com/now/nav/ui/classic/params/target");
    const statusmessage = await iFrameObj.locator('//div[@class="notification notification-success"]/span/following-sibling::span').innerText();
    console.log(`The order status message is ${statusmessage}`)
    expect(statusmessage).toBe('Thank you, your request has been submitted');
    await page.screenshot({
        path:'Data/ServicenowScreenshot.png',
        fullPage: true    
    });
}
)
