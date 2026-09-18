import {test,expect} from "@playwright/test"

test("Alerts and frames Assignment", async({page})=>{
    page.on("dialog",async(alertname)=>{
        console.log("Alert name is "+alertname.type());
        console.log("Alert message is "+alertname.message());
        alertname.accept();
    }
)
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    const frameObj = page.frameLocator('//iframe[@id="iframeResult"]');
    await frameObj.getByRole('button',{name:"Try it"}).click();
    await page.waitForTimeout(2000);
    const msg = await frameObj.locator('//Button[text()="Try it"]/following-sibling::p').innerText();
    await expect(msg).toBe('You pressed OK!');

    }
)