let firstName="Geetha"
let lastName="M"
let companyName="Testleaf"

import {test} from "@playwright/test"
test("CRM Create Lead", async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.getByRole('textbox',{name:"Username"}).fill('democsr2');
    await page.getByRole('textbox',{name:"Password"}).fill('crmsfa');
    await page.getByRole('button',{name:"Login"}).click();
    await page.locator('//a[contains(text(),"CRM")]').click();

    await page.locator('//a[text()="Leads"]').click();
    await page.waitForTimeout(2000);
    await page.locator('//a[text()="Create Lead"]').click();
    await page.locator('//input[@id="createLeadForm_companyName"]').fill(companyName);
    await page.locator('//input[@id="createLeadForm_firstName"]').fill(firstName);
    await page.locator('//input[@id="createLeadForm_lastName"]').fill(lastName);
    await page.locator('#createLeadForm_personalTitle').fill("Mrs.");
    await page.selectOption('//select[@id="updateLeadForm_industryEnumId"]',{value:"IND_GEN_SERVICES"});
    await page.locator('#createLeadForm_departmentName').fill("Testing");
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('123456789');
    //await page.getByRole('button',{name:"Create Lead"}).first().click();
    await page.locator('//input[@name="submitButton"]').click();
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(5000);
    const pageTitle = await page.title();
    console.log(`Title of the page is ${pageTitle}`);
    const leadName = await page.locator('#viewLead_firstName_sp').innerText();
    if (leadName===firstName){
        console.log(`Lead ${leadName} is created successfully`);
    }else{
        console.log(`created lead name: ${leadName} is not matching with the expected name ${firstName}`);
    }

}
)