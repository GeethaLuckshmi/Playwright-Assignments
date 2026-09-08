
let userName = "Geetha M"
import {test,expect} from "@playwright/test"

test("Salesforce Create New Account", async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in");
    await page.getByLabel('Username',{exact:true}).fill("dilipkumar.rajendran@testleaf.com");
    await page.locator('[id="Login"]').click();
    await page.getByLabel('Password',{exact:true}).fill("TestLeaf@2025");
    await page.locator('[id="Login"]').click();
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(5000);
    const pageTitle = await page.title();
    console.log(`Title of the page is ${pageTitle}`);
    const pageURL = page.url();
    console.log(`URL of the page is ${pageURL}`);
    expect.soft(pageTitle).toBe("Home | Salesforce");
    expect(pageURL).toContain("https://testleaf.lightning.force.com/lightning/page/home");

    await page.locator('.slds-icon-waffle').last().click();
    await page.getByText("View All", { exact: true }).nth(2).click();
    await page.getByPlaceholder("Search apps or items...", { exact: true }).fill("Service");
    await page.locator('(//mark[text()="Service"])[1]').click();
    //await page.locator('class="slds-context-bar__label-action dndItem"').nth(5).click();
    await page.locator('//span[text()="Accounts"]').click();
    await page.getByRole('button',{name:"New"}).click();
    //await page.locator('id=/input.*/').fill(userName);
    await page.getByRole('textbox',{name:"Account Name"}).fill(userName);
    await page.locator('//button[@name="SaveEdit"]').click();
    const accountName = await page.locator('//slot[@name="primaryField"]/lightning-formatted-text').innerText();
    expect(accountName).toBe(userName);

}
)