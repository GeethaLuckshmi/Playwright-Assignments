import {test,expect} from "@playwright/test"
test("CRM Merge Lead", async({page,context})=>{

    //alert handling
    page.on("dialog",async(alertname)=>{
        console.log("Alert name is "+alertname.type());
        console.log("Message on the alert is "+alertname.message());
        alertname.accept(); 
    }
)
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.getByRole('textbox',{name:"Username"}).fill('demosalesmanager');
    await page.getByRole('textbox',{name:"Password"}).fill('crmsfa');
    await page.getByRole('button',{name:"Login"}).click();
    await page.locator('//a[contains(text(),"CRM")]').click();

    await page.locator('//a[text()="Leads"]').click();
    await page.waitForTimeout(2000);
    await page.locator('//a[text()="Merge Leads"]').click();

    //window handling
    const [lead1] = await Promise.all([page.waitForEvent('popup'),page.locator('(//img[@src="/images/fieldlookup.gif"])[1]').click()]);
    await lead1.waitForLoadState();
    await lead1.locator('(//div[contains(@class,"partyId")])[2]/a').click();
    await page.waitForTimeout(2000);
    await page.bringToFront();
    await page.waitForLoadState("domcontentloaded");
    //await page.locator('(//img[@src="/images/fieldlookup.gif"])[2]').click();
    const [lead2] = await Promise.all([page.waitForEvent('popup'),page.locator('(//img[@src="/images/fieldlookup.gif"])[2]').click()]);
    await lead2.waitForLoadState();
    await lead2.locator('(//div[contains(@class,"partyId")])[3]/a').click();
    await page.waitForTimeout(2000);
    await page.bringToFront();
    //const getTitle = page.title();
    await expect(page).toHaveTitle(/Merge/);
    await page.locator('//a[text()="Merge"]').click();    

}
)