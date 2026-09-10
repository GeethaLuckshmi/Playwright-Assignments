let seatNumber="";
let rowNumber="";
let strMovieName = "SARDAR 2";
let forStatus = "false";

import {expect, test} from "@playwright/test"
test ("PVR Movie Ticket Booking", async({page})=>{
    await page.goto("https://www.pvrcinemas.com/");
    await page.locator('(//span[@class="cities-placed"])[2]').click();
    await page.waitForTimeout(2000);
    page.getByRole('combobox',{name:'Cities'}).fill('Chennai');
    await page.locator("//li[contains(text(),'Chennai')]").click();
    await page.locator('(//span[contains(text(),"Cinema")])[1]').click();
    await page.locator('//span[contains(text(),"Select Cinema")]').click();
    await page.locator('//span[text()="INOX National,Virugambakkam Chennai"]').click();
    await page.locator('//span[contains(text(),"Tomorrow")]').click();
    await page.locator(`//span[text()="${strMovieName}"]`).nth(1).click();
    await page.waitForTimeout(1000);
    const movieTime = page.locator('//ul[@role="listbox"]/li').nth(1)
    const getmovieTime = await movieTime.innerText();  // storing the movietime for future validation
    console.log(`movie time is ${getmovieTime}`);
    await movieTime.click();
    await page.getByRole('button',{name:"Submit"}).click();
    await page.getByRole('button',{name:"Accept"}).click();
    await page.waitForTimeout(2000);

    //available seat booking by taking the entire row and column count. Verify first whether seat is booked or not before selecting them.
    const rowCount = await page.locator('//div[@class="all-seats"]/div/tr').count();
    console.log(`row count is ${rowCount}`)
    for (let i=rowCount-1;i>=0;i--){
        const columnCount = await page.locator(`(//div[@class="all-seats"]/div/tr)[${i}]/td`).count();
        console.log(`colum count is ${columnCount} for i=${i}`)
        for (let j=columnCount;j>0;j--){
            let seatStatus = await page.locator(`((//div[@class="all-seats"]/div/tr)[${i}]/td)[${j}]/span`).getAttribute("class");
            console.log(`seat Status is ${seatStatus}`);
            if(seatStatus=="seat-current-pvr"){
                await page.locator(`((//div[@class="all-seats"]/div/tr)[${i}]/td)[${j}]/span`).click();
                seatNumber = await page.locator(`((//div[@class="all-seats"]/div/tr)[${i}]/td)[${j}]/span`).innerText();
                rowNumber = await page.locator(`((//div[@class="all-seats"]/div/tr)[${i}]/td)[1]/span`).innerText();
                console.log(`Row Number is ${rowNumber} and Seat Number is ${seatNumber}`);
                forStatus = "true";
                break;
            }
        }
        if(forStatus){
           break; 
        }
    }
    // after seat selection. Validation of movie details.
    await page.waitForTimeout(3000);
    await page.locator(`//h5[text()="${strMovieName}"]`).scrollIntoViewIfNeeded();
    let movieName = await page.locator(`//h5[text()="${strMovieName}"]`).innerText();
    expect(movieName).toBe("SARDAR 2");                                 //movie name validation
    let substringValue = getmovieTime.slice(1,4);
    const finalMovieTime = await page.locator(`//p[contains(text(),"${substringValue}")]`).innerText();
    expect(finalMovieTime).toContain(substringValue);                   //movie time validation
    const seatInfo = await page.locator('//div[@class="seat-info"]/p').innerText();
    expect(seatInfo).toBe("SILVER");
    const finalSeatNumer=rowNumber+seatNumber
    expect(page.locator('//div[@class="seat-number"]/p')).toHaveText(finalSeatNumer);   //seat number validation
    expect(page.locator('//div[@class="grand-prices"]/h6')).toHaveText("218.02");       //total amount validation
    await page.getByRole('button',{name:"Proceed"}).click();
    await page.waitForTimeout(2000);


}
)