import { Page } from "@playwright/test";

export class LeaftapsCreateLead{
    page:Page;
    

    constructor(LPage:Page){
       this.page= LPage;
    }

    async login(baseurl:string,username:string,password:string){
        await this.page.goto(baseurl);
        await this.page.waitForLoadState("domcontentloaded");
        await this.page.getByRole('textbox',{name:"Username"}).fill(username);
        await this.page.getByRole('textbox',{name:"Password"}).fill(password);
        await this.page.getByRole('button',{name:"Login"}).click();
    }

    async createLead(companyName:string,firstName:string,lastName:string,title:string){
        await this.page.locator('//a[contains(text(),"CRM")]').click();
        await this.page.locator('//a[text()="Leads"]').click();
        await this.page.waitForTimeout(2000);
        await this.page.locator('//a[text()="Create Lead"]').click();
        await this.page.locator('//input[@id="createLeadForm_companyName"]').fill(companyName);
        await this.page.locator('//input[@id="createLeadForm_firstName"]').fill(firstName);
        await this.page.locator('//input[@id="createLeadForm_lastName"]').fill(lastName);
        await this.page.locator('#createLeadForm_personalTitle').fill(title);
        await this.page.selectOption('//select[@id="createLeadForm_dataSourceId"]', { label: "Direct Mail" });
        await this.page.selectOption('//select[@id="createLeadForm_marketingCampaignId"]', { value: "DEMO_MKTG_CAMP" });
        const marketingCampaignList = this.page.locator('//select[@id="createLeadForm_marketingCampaignId"]/option');
        const mcList = await marketingCampaignList.count();
        for (let i=0;i<mcList;i++){
            let mcValue = await this.page.locator(`//select[@id="createLeadForm_marketingCampaignId"]/option`).nth(i).getAttribute("value");
            console.log(mcValue);
        }
        await this.page.selectOption('//select[@id="createLeadForm_industryEnumId"]',{index:6});
        await this.page.selectOption('//select[@id="createLeadForm_currencyUomId"]', { value: "INR" });
        await this.page.selectOption('//select[@id="createLeadForm_generalCountryGeoId"]', { value: "IND" });
        await this.page.waitForTimeout(2000);
        await this.page.selectOption('//select[@id="createLeadForm_generalStateProvinceGeoId"]',{index:6});
        const stateList = this.page.locator('//select[@id="createLeadForm_generalStateProvinceGeoId"]/option');
        const stateCount = await stateList.count();
        for (let i=0;i<stateCount;i++){
            let stateValue = await stateList.nth(i).getAttribute("value");
            console.log(stateValue);
        }
        await this.page.waitForTimeout(2000);
        await this.page.locator('//input[@name="submitButton"]').click();
        await this.page.waitForLoadState("domcontentloaded");
        await this.page.waitForTimeout(2000);
        const leadName = await this.page.locator('#viewLead_firstName_sp').innerText();
        if (leadName===firstName){
            console.log(`Lead ${leadName} is created successfully`);
        }else{
            console.log(`created lead name: ${leadName} is not matching with the expected name ${firstName}`);
        }
        }
}