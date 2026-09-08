/* Develop a Playwright script that interacts with and verifies the behavior of dropdowns. 
The script should handle tasks like validating the options available, checking correct selections, 
and asserting dynamic content loading based on selections. */

import { test,expect } from "@playwright/test";
test("Learn Non Select tag dropdown",async({page})=>{
    await page.goto('https://leafground.com/select.xhtml');

    //Select automation tool
    await page.selectOption('//select[@class="ui-selectonemenu"]',{label:"Playwright"});
    const toolList =page.locator('//select[@class="ui-selectonemenu"]/option')
    let listCount = await toolList.count();
    for (let i=0;i<listCount;i++){
        const toolNames = page.locator('//select[@class="ui-selectonemenu"]/option').nth(i).innerText();
        console.log(`List of values from Automation Tool dropdown: ${toolNames}`)
    }

    //choose country
    await page.locator('//label[text()="Select Country"]').click();
    await page.locator('//li[text()="India"]').click();

    //Confirm Cities belongs to Country is loaded
    await page.locator('//label[text()="Select City"]').click();
    await expect.soft(page.locator('//li[text()="Chennai"]')).toBeVisible();
    await page.locator('//li[text()="Chennai"]').click();
    await page.waitForTimeout(2000);

    //multi select dropdown
    const courseList = ["Appium","Playwright","ReactJs"];
    await page.locator('//input[contains(@id,"auto-complete_input")]').click();
    await page.locator('//input[contains(@id,"auto-complete_input")]').clear();
    for (const course of courseList){
        await page.locator('//input[contains(@id,"auto-complete_input")]').fill(course);
        await page.waitForTimeout(1000);
        await page.locator(`//span[text()="${course}"]`).click();
    }
    
    //choose language
    await page.locator('//label[text()="Select Language"]').click();
    const languageList = page.locator('(//ul[@role="listbox"])[2]/li')
    const languageCount = await languageList.count();
    for (let i=0;i<listCount;i++){
        const languageNames = page.locator('(//ul[@role="listbox"])[2]/li').nth(i).innerText();
        console.log(`List of values from Languages dropdown: ${languageNames}`)
    }
    page.locator('(//ul[@role="listbox"])[2]/li').nth(1).click();

    //Select 'Two' irrespective of the language chosen
    await page.locator('//label[text()="Select Values"]').click();
    await page.locator('(//ul[@role="listbox"])[4]/li[text()="Two"]').click();

})