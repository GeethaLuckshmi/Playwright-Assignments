///<reference types="node"/>

/* Automate uploading and downloading a file on the web page 
without interacting with the Upload and Download button. */

import {expect, test} from "@playwright/test"
import path from "path";
import fs from 'fs';

//File download scenario:

test("File Upload and Download Assignment", async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/download');
    await page.waitForLoadState("domcontentloaded");
    const linkList = page.locator('//div[@class="example"]/a');
    const linkCount = await linkList.count();
    console.log(`Total links count is ${linkCount}`)
    for(let i=0;i<linkCount;i++){
        const linkName = await linkList.nth(i).innerText();
        if (linkName.includes(".json")){
            const [downloadFile] = await Promise.all([page.waitForEvent('download'),linkList.nth(i).click()]);
            const filePath = path.join(__dirname, `../../Data/${downloadFile.suggestedFilename()}`)
            downloadFile.saveAs(filePath);
            console.log(`Downloaded file name is ${linkName}`)
            await expect(fs.existsSync(path.join(__dirname, `../../Data/${linkName}`))).toBeTruthy;
            break;

        }
    }
    await page.waitForTimeout(3000);
})

//file upload scenario

test.only("File Upload and Download", async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload');

    //upload a document using input tag
    await page.locator('//input[@type="file"]').first().setInputFiles(path.join(__dirname,"../../Data/testUpload.json"));
    
    //image upload with non input tag
    const fileuploadPromise = page.waitForEvent("filechooser"); 
    await page.locator('[id="drag-drop-upload"]').click();    
    const fileUploadRef = await fileuploadPromise   
    const file1path = path.join(__dirname,"../../Data/file1.png",)
    fileUploadRef.setFiles(file1path)
    await expect(page.getByText("file1.png")).toBeVisible();         
    await page.waitForTimeout(3000)

})
