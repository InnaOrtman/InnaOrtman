const loginPage = require('../../pageobjects/login.page')
const Authentication = require('../../pageobjects/authentication')

describe('**Incharge** WEB Page', ()=> {
    it('should Freeze Card', async()=> {
        
    await loginPage.open()
    await loginPage.login()
    
    const modal = await $("//span[normalize-space()='Card details']")
    await modal.waitForDisplayed()
    await $("//button[2]").click()
    await browser.pause(1000)

    await $("(//span[contains(text(),'Card settings')])[2]").scrollIntoView()
    await browser.pause(1000)
    await $("(//span[contains(text(),'Card settings')])[2]").click()
    await browser.pause(2000)

    expect (await $("//span[normalize-space()='Freeze']")).toBeDisplayed()
    await browser.pause(1000)
    await $("//span[normalize-space()='Freeze']").click()
    await $("//div[contains(text(),'Your card has been frozen successfully')]").waitForDisplayed()

    expect (await $("//div[contains(text(),'Your card has been frozen successfully')]")).toBeDisplayed()
    await browser.pause(1000)

    });

   it('should "Unfreeze" Card', async()=> {
    await browser.pause(1000)
    await $("(//span[contains(text(),'Card settings')])[2]").click()
    await browser.pause(1000)
    await $("//span[normalize-space()='Unfreeze']").click()
    await browser.pause(1000)
    await $("//span[normalize-space()='Confirm']").click()
    await browser.pause(1000)
    await Authentication.fill_in()
    await browser.pause(2000)

    expect (await $("//h1[normalize-space()='Authentication successful']")).toBeDisplayed()
    await $("//button[@type='button']").click()
    await browser.pause(1000)
    

   });

});