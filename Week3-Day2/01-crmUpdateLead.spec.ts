/* Create a test script that navigates to a CRM application, logs in, finds a specific lead by name or 
ID, edits details of the lead (such as name, email, or status), and verifies that the changes have 
been successfully saved.  */

let firstName="Geetha"
let lastName="M"
let Industry = "Non-profit"
let description = "Details Updated"
let companyName="Testleaf"

import {test,expect} from "@playwright/test"

test("CRM Update Lead", async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.getByRole('textbox',{name:"Username"}).fill('democsr2');
    await page.getByRole('textbox',{name:"Password"}).fill('crmsfa');
    await page.getByRole('button',{name:"Login"}).click();
    await page.locator('//a[contains(text(),"CRM")]').click();

    await page.locator('//a[text()="Leads"]').click();
    await page.waitForTimeout(2000);

    await page.getByRole('link',{name:"Find Leads"}).click();
    await page.locator('(//input[@name="firstName"])[3]').fill(firstName);
    await page.getByRole('textbox',{name:"Last Name"}).nth(2).fill(lastName);
    await page.getByRole('button',{name:"Find Leads"}).click();
    await page.locator('//a[@class="linktext"]').nth(6).click();

    await page.getByRole('link',{name:"Edit"}).click();
    await page.selectOption('//select[@id="updateLeadForm_industryEnumId"]',{label:Industry});
    await page.locator('//input[@id="updateLeadForm_departmentName"]').fill("Management");
    await page.locator('//textarea[@id="updateLeadForm_description"]').fill(description);
    await page.getByRole('button',{name:"Update"}).click();
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(5000);
    //assertions
    await expect(page.locator('//span[@id="viewLead_firstName_sp"]')).toHaveText(firstName); //First name validation
    await expect.soft(page.locator('//span[@id="viewLead_lastName_sp"]')).toHaveText(lastName); //First name validation
    const updatedCompany = await page.locator('//span[@id="viewLead_companyName_sp"]').innerText();
    expect(updatedCompany).toContain(companyName); //Industry validation
    const updateIndustry = await page.locator('//span[@id="viewLead_industryEnumId_sp"]').innerText();
    expect(updateIndustry).toBeTruthy //Industry validation
    const updateStatus = await page.locator('//span[@id="viewLead_statusId_sp"]').innerText();
    expect(updateStatus).toBe("Assigned"); //status validation
    const updatedDescription = await page.locator('//span[@id="viewLead_description_sp"]').innerText();
    expect(updatedDescription).toBe(description); //Description validation
    await expect(page.locator('//span[@id="viewLead_departmentName_sp"]')).toContainText("Man"); //Department validation




}
)
