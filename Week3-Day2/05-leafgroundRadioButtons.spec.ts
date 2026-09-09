/* Write a Playwright script to automate the interaction with radio buttons on the LeafGround 
"Radio" page. The tasks will include checking default selections, enabling selections, and 
validating group exclusive selections.  */

import { test,expect } from "@playwright/test";
test("Radio button assignment",async({page})=>{
    await page.goto('https://leafground.com/radio.xhtml');

    //Identify and assert the default selected radio button
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(3000);
    const radioButtonsCollection = page.locator('//input[contains(@id,"console2")]');
    const radiocount = await radioButtonsCollection.count();
    console.log(radiocount)
    for (let i=0;i<radiocount;i++){
        const radioAttribute = await radioButtonsCollection.nth(i).getAttribute("checked");
        if(radioAttribute!==null){
            const getValue = await radioButtonsCollection.nth(i).getAttribute('value');
            const getInnerText = await page.locator(`(//input[@value="${getValue}"]/parent::div/following::label)[1]`).innerText();
            expect.soft(radioAttribute).toBe("checked");
            console.log(`The default selected Radio button is ${getInnerText}`);
        }
    }

    //selecting the favorite browser and verifying the enabled status
    const getRadioList = page.locator('//label[text()="Chrome"]/preceding-sibling::div/div/input');
    const getRadioCount = await getRadioList.count();
    for (let i=0;i<getRadioCount;i++){
        const getname = await getRadioList.nth(i).getAttribute('name');        
        if (getname!==null){
            if (getname.includes("console1")){
                await expect.soft(getRadioList.nth(i)).toBeEnabled();
                await page.locator('//label[text()="Chrome"]').nth(i).click();
                await page.waitForTimeout(2000);

             }
        }     

    }

    //select the favourite city
    await page.locator('//label[text()="Chennai"]').click();
    await expect(page.locator('//input[@type="radio" and @value="Chennai"]')).toBeChecked();
    await page.waitForTimeout(2000);

    //Select the age group and assert the default selected button
    const ageButtonsCollection = page.locator('//input[contains(@name,"age")]');
    const agecount = await ageButtonsCollection.count();
    console.log(agecount)
    for (let i=0;i<agecount;i++){
        const ageRadioAttribute = await ageButtonsCollection.nth(i).getAttribute("checked");
        if(ageRadioAttribute!==null){
            const getValue = await ageButtonsCollection.nth(i).getAttribute('value');
            const getInnerText = await page.locator(`(//input[@value="${getValue}"]/parent::div/following::label)[1]`).innerText();
            expect.soft(ageRadioAttribute).toBe("checked");
            console.log(`The default selected Radio button is ${getInnerText}`);
        }
    }

}
)