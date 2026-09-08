import {test} from "@playwright/test"

test("Salesforce Create/Update Lead and Individuals", async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in");
    await page.locator('[id="username"]').fill("dilipkumar.rajendran@testleaf.com");
    await page.locator('[id="Login"]').click();
    await page.locator('[id="password"]').fill("TestLeaf@2025");
    await page.locator('[id="Login"]').click();
    await page.waitForTimeout(2000);
    await page.locator('[class="slds-global-header__logo"]').first().isVisible();
    await page.locator('//div[@class="slds-icon-waffle"]').click();
    await page.locator('[aria-label="View All Applications"]').click();
    await page.locator('//div[@data-name="Sales"]').click();
    await page.waitForTimeout(2000);

    //Create Lead
    let lastName = 'NewLead'
    let companyName = 'NewCompany'
    await page.getByRole('link',{name:'Leads'}).click();
    await page.getByRole('button',{name:'New'}).click();
    await page.getByRole('combobox',{name:'Salutation'}).click();
    await page.locator('[data-value="Mr."]').click();    
    await page.getByRole('textbox',{name:'Last Name'}).fill(lastName);
    await page.getByRole('textbox',{name:'Company'}).fill(companyName);
    await page.locator('//button[@name="SaveEdit"]').click();
    let ActualLeadName = await page.locator('//slot[contains(@class,"slds-page-header__title slds-m-righ")]/lightning-formatted-name').innerText();
    let expectedLeadName = "Mr."+" "+lastName
    if (ActualLeadName===expectedLeadName){
        console.log(`${ActualLeadName} Lead is created successfully`);
    }else{
        console.log(`created lead name: ${ActualLeadName} is not matching with the expected name ${expectedLeadName}`);
    }

    // Edit Lead
    let FirstName = 'FirstName'
    let updatedLastName = 'UpdatedLead'
    let updatedCompanyName = 'UpdatedCompany'
    let expectedUpdatedLeadName = "Mr."+" "+FirstName+" "+updatedLastName
    await page.getByRole('button',{name:'Edit',exact:true}).click();
    await page.getByRole('textbox',{name:'First Name'}).fill(FirstName);
    await page.getByRole('textbox',{name:'Last Name'}).fill(updatedLastName);
    await page.getByRole('textbox',{name:'Company'}).fill(updatedCompanyName);
    await page.locator('//button[@name="SaveEdit"]').click();
    //await page.waitForTimeout(4000);
    let actualCompanyName = await page.locator('//p[@title="Company"]/following-sibling::p/slot/lightning-formatted-text').innerText();
    //let actualUpdatedLeadName = await page.locator('(//lightning-formatted-name[text()=expectedUpdatedLeadName])').innerText();
    let actualUpdatedLeadName = await page.locator('//div[@class="entityNameTitle slds-line-height--reset"]/following-sibling::slot/lightning-formatted-name').innerText();
    if (actualUpdatedLeadName===expectedUpdatedLeadName && actualCompanyName===updatedCompanyName ){
        console.log(`${actualUpdatedLeadName} details are updated successfully`);
    }else{
        console.log(`Updated lead: ${actualUpdatedLeadName} details are not matching with the expected data ${expectedUpdatedLeadName}`);
    }
    await page.waitForTimeout(2000);

    //Create Individuals
    let individualLN = "Luckshmi"
    await page.locator('//div[@class="slds-icon-waffle"]').click();
    await page.locator('[aria-label="View All Applications"]').click();
    await page.locator('//p[text()="Individuals"]').click();
    await page.getByRole('button',{name:"New"}).click();
    await page.getByRole('textbox',{name:'Last Name'}).fill(individualLN);
    await page.getByRole('button',{name:'Save',exact:true}).click();   
    let actualIndividualName = await page.locator('(//span[@class="uiOutputText"])[2]').innerText();
    if (actualIndividualName===individualLN){
        console.log(`${actualIndividualName} Individual is created successfully`);
    }else{
        console.log(`created Individual name: ${actualIndividualName} is not matching with the expected name ${individualLN}`);
    }

    // Edit Individual
    let updatedIndividualLN = "UpdatedLuckshmi"
    await page.getByRole('button',{name:'Edit',exact:true}).click();
    await page.getByRole('textbox',{name:'Last Name'}).fill(updatedIndividualLN);
    await page.getByRole('button',{name:'Save',exact:true}).click();    
    //let actualUpdatedValue = await page.locator('(//span[@class="uiOutputText"])[8]').innerText();
    let actualUpdatedValue = await page.locator('//div[text()="Individual"]/following-sibling::div/span').innerText();
    if (actualUpdatedValue===updatedIndividualLN){
        console.log(`${actualUpdatedValue} Individual is updated successfully`);
    }else{
        console.log(`created Individual name: ${actualUpdatedValue} is not matching with the expected name ${updatedIndividualLN}`);
    }


})