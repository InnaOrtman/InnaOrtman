const loginPage = require('../../pageobjects/login.page')


describe('**Incharge** WEB Page', ()=> {
    it('should Add Founds', async()=> {
    
    await loginPage.open()
    await loginPage.login()
   
    const modal = await $("//span[normalize-space()='Card details']")
    await modal.waitForDisplayed()
    await $("//button[2]").click()
    await browser.pause(2000)
    
    let Balance = await $("(//span[@class='text-2xl font-bold'])[1]").getText()
    Balance = Balance.split(" ")
    Balance =  Number(Balance[1])

    await $("//div[contains(text(),'Add funds')]").click()
    await browser.pause(1000)
    await $("//input[@placeholder='100 €']").setValue(2)
    await browser.pause(1000)
    await $("//button[@type='button']").click()
    await $("//span[normalize-space()='Top up with this card']").click()
    await $("//div[@role='alert']").waitForDisplayed()
    await browser.pause(2000)
    
    expect (await $("//div[@role='alert']").getText()).toEqual("Top up successful")
    await browser.pause(4000)

    let Balance_2 = await $("(//span[@class='text-2xl font-bold'])[1]").getText()
    Balance_2 = Balance_2.split(" ")
    Balance_2 =  Number(Balance_2[1])
    expect (await Balance_2).toEqual(await Balance + 2)


    

    });



});