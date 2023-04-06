const loginPage = require('../../pageobjects/login.page')
const Authentication = require('../../pageobjects/authentication')

describe('**Incharge** WEB Page', ()=> {
    it('should check Card Details', async()=> {
    
    await loginPage.open()
    await loginPage.login()
   
    const modal = await $("//span[normalize-space()='Card details']")
    await modal.waitForDisplayed()
    await $("//button[2]").click()
    await browser.pause(1000)
    await $("(//*[name()='svg'][@class='cursor-pointer'])[1]").click()
    await browser.pause(1000)
    let user_name = await $(".text-lg").getText()
    user_name = user_name.toUpperCase()
    await $("(//span[contains(text(),'Card details')])[2]").scrollIntoView()
    await browser.pause(1000)
    await $("(//span[contains(text(),'Card details')])[2]").click()
    await $("//h1[normalize-space()='Authentication']").waitForDisplayed()
    await browser.pause(1000)
    await $("//span[normalize-space()='Confirm']").click()
    await browser.pause(1000)
    await Authentication.fill_in()
    await browser.pause(2000)

    expect (await $("//*[@text='Card Details']")).toBeDisplayedInViewport()
    expect (await $(".sc-eEVmNe.ebqyDy").getText()).toEqual(user_name)
    

    });

});