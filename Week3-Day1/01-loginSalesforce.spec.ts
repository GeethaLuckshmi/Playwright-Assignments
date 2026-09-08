/* Assignment Details: Your task is to print the title and url of a web page using Playwright */

import {chromium,test, webkit} from "@playwright/test"

test("Salesforce application login", async()=>{

const browser = await chromium.launch({headless:false}) 
const context = await browser.newContext(); 
const page = await context.newPage() 

await page.goto("https://login.salesforce.com/")
await page.locator('[id="username"]').fill("dilipkumar.rajendran@testleaf.com");
//await page.locator('[id="username"]').fill('geetha.luckshmi.936e8da50fe1@agentforce.com');
await page.locator('[id="Login"]').click();
await page.locator('[id="password"]').fill("TestLeaf@2025");
//await page.locator('[id="password"]').fill('Sudisha@2019');
await page.locator('[id="Login"]').click();
await page.waitForTimeout(10000);
const pageTitle = await page.title(); //get the title of the page and store in const variable
const pageURL = page.url();           //get the url of the page and store in const variable
console.log(`Page Title is ${pageTitle}`); //output = Page Title is Home | Salesforce
console.log(`Page URL is ${pageURL}`);      //output = Page URL is https://testleaf.lightning.force.com/lightning/page/home

} 
)
