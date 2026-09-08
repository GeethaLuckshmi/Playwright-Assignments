import { test,expect } from "@playwright/test";

test("Checkbox Handling", async ({ page }) => {

    await page.goto("https://leafground.com/checkbox.xhtml");

    //Basic checkbox
    await page.locator('//span[text()="Basic"]').click();

    //notification checkbox
    await page.locator('//span[text()="Ajax"]').click();
    //await page.getByLabel("Ajax").click();
    const notification = page.getByText("checked");
    await expect.soft(notification).toBeVisible();
    await page.waitForTimeout(2000);

    //language selection
    const languageSelection = page.getByText('Python');
    await languageSelection.click();
    expect(languageSelection).toBeChecked();

    //Tristate Checkbox validation
    const tristateCheckbox = page.locator('//h5[text()="Tri State Checkbox"]/following-sibling::div/div/div');
    await tristateCheckbox.click();
    const stateStatus = await page.locator('//p[contains(text(),"State")]').innerText();
    console.log(`Tristate Status is ${stateStatus}`);
    await page.waitForTimeout(2000);

    //Toggle switch
    const toggleSwitch = page.locator('//div[@class="ui-toggleswitch-slider"]');
    await toggleSwitch.click();
    const message = page.getByText("Checked");
    await expect(message).toBeVisible();

    //checkbox status verification
    const disabledCheckbox = page.getByLabel('Disabled');
    await expect(disabledCheckbox).toBeDisabled();

    //multiple checkboxes handling
    const location=["Miami","London","Berlin","Rome"]
    await page.locator('//ul[contains(@class,"ui-selectcheckboxmenu-multiple")]').click();
    for(const loc of location){
        //await page.getByText(loc,{exact:true}).first().click();
        await page.locator(`(//label[text()="${loc}"])[2]`).click();
    }


}
)