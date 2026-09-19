let userName="Geets"

import {test,expect} from "@playwright/test"
import path from "path"

test("Salesforce application File Upload", async({page,context})=>{

await page.goto("https://login.salesforce.com/")
await page.locator('[id="username"]').fill('geetha.luckshmi.936e8da50fe1@agentforce.com');
await page.locator('[id="Login"]').click();
await page.locator('[id="password"]').fill('Sudisha@2019');
await page.locator('[id="Login"]').click();
await page.waitForLoadState("domcontentloaded");
await page.waitForTimeout(4000);
await page.locator('.slds-icon-waffle').last().click();
//await context.storageState({path:"Data/salesforcelogin.json"})
await page.waitForTimeout(2000);
await page.getByRole('button',{name:"View All Applications"}).click();
await page.waitForTimeout(2000);
await page.getByPlaceholder("Search apps or items...", { exact: true }).fill("Accounts");
await page.waitForTimeout(2000);
await page.locator('//mark[text()="Accounts"]').click();
await page.waitForTimeout(2000);
await page.getByRole('button',{name:"New"}).click();
await page.getByRole('textbox',{name:"Account Name"}).fill(userName);
await page.waitForTimeout(1000);
await page.getByRole('combobox',{name:"Rating"}).click();
//await page.getByLabel('Rating',{exact:true}).click();
await page.getByTitle('Warm',{exact:true}).click()
await page.waitForTimeout(1000);
await page.getByRole('combobox',{name:"Type"}).click()
await page.getByTitle('Prospect',{exact:true}).click()
await page.waitForTimeout(1000);
await page.getByRole('combobox',{name:"Industry"}).click()
await page.getByTitle('Banking',{exact:true}).click()
await page.waitForTimeout(2000);
await page.getByRole('combobox',{name:"Ownership"}).first().click()
await page.getByTitle('Public',{exact:true}).click()
await page.locator('//button[@name="SaveEdit"]').click();
const accountName = await page.locator('//slot[@name="primaryField"]/lightning-formatted-text').innerText();
expect(accountName).toBe(userName);
await page.locator('//div[text()="Upload Files"]').scrollIntoViewIfNeeded();
const [uploadfile] = await Promise.all([page.waitForEvent("filechooser"),page.locator('//div[text()="Upload Files"]').click()]);
await page.waitForTimeout(2000);
await uploadfile.setFiles(path.join(__dirname,"../../Data/file1.png",))
await expect.soft(page.locator('//span[text()="Done"]')).toBeEnabled();
await page.waitForTimeout(2000);
await page.locator('//span[text()="Done"]').click();
await page.waitForTimeout(2000);
//await page.mouse.wheel(0, 700);
const uploadedfilename = await page.locator('(//span[contains(text(),"file1")])[2]').innerText();
await expect(uploadedfilename).toContain("file1");
//We can't send you a verification code right now. Please try again later.

}
)
