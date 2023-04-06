
const loginPage = require('../../pageobjects/login.page')
const Authentication = require('../../pageobjects/authentication')

describe('**Incharge** WEB Page', ()=> {
    
    it('should Change PIN in Physical Card', async()=> {
        
    await loginPage.open()
    await loginPage.login()
    
    const modal = await $("//span[normalize-space()='Card details']")
    await modal.waitForDisplayed()
    await $("//button[2]").click()
    await browser.pause(1000)
    
    await $("(//span[contains(text(),'Card settings')])[1]").scrollIntoView()
    await $("(//span[contains(text(),'Card settings')])[1]").click()
    await browser.pause(1000)
    expect (await $("//span[normalize-space()='Change PIN']")).toBeDisplayedInViewport()
    await browser.pause(1000)
    await $("//span[normalize-space()='Change PIN']").click()
    await $("//span[normalize-space()='Confirm']").waitForDisplayed()
    await $("//span[normalize-space()='Confirm']").click()
    await browser.pause(1000)
    await Authentication.fill_in()
    await browser.pause(2000)
    await $("//h1[normalize-space()='Set PIN code']").waitForDisplayed()
    var chars = '1234567890';
    var string = '';
    for(var ii=0; ii<4; ii++){
    string += chars[Math.floor(Math.random() * chars.length)];
    }
    await $("//h1[normalize-space()='Set PIN code']").waitForDisplayed()
    await $("//input[@data-id='0']").setValue(string[0])
    await $("//input[@data-id='1']").setValue(string[1])
    await $("//input[@data-id='2']").setValue(string[2])
    await $("//input[@data-id='3']").setValue(string[3])
    await browser.pause(2000)
    await $("//button[@class='sc-crzoAE ceXlkG']").click()
    await browser.pause(2000)
    await $("//h1[normalize-space()='Confirm PIN code']").waitForDisplayed()
    await $("//input[@data-id='0']").setValue(string[0])
    await $("//input[@data-id='1']").setValue(string[1])
    await $("//input[@data-id='2']").setValue(string[2])
    await $("//input[@data-id='3']").setValue(string[3])
    await $("//button[@class='sc-crzoAE ceXlkG']").click()

    
    expect (await $("//h1[normalize-space()='Card PIN changed']").getText()).toEqual("Card PIN changed")
    await $("//button[@type='button']").click()
    expect (await $("//h1[normalize-space()='Balance']")).toBeDisplayedInViewport()
    await browser.pause(2000)

    });

});