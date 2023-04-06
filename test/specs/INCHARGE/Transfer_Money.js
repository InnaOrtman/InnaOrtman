const loginPage = require('../../pageobjects/login.page')
const Authentication = require('../../pageobjects/authentication')

describe('**Incharge** WEB Page', ()=> {
    
    it('should Transfer Money +', async()=> {
   
    await loginPage.open()
    await loginPage.login()

    const modal = await $("//span[normalize-space()='Card details']")
    await modal.waitForDisplayed()
    await $("//button[2]").click()
    await browser.pause(2000)
    
    let Balance = await $("(//span[@class='text-2xl font-bold'])[1]").getText()
    Balance = Balance.split(" ")
    Balance =  Number(Balance[1])
    
    await $("//div[contains(text(),'Transfer money')]").click()
    await browser.pause(1000)
    expect (await $("//h1[normalize-space()='Transfer money']")).toBeDisplayedInViewport()
    await $("//input[@name='amount']").setValue("2")
    await browser.pause(2000)
    await $("//input[@name='countryCode']").click()
    await browser.pause(1000)
    await $("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/form[1]/div[2]/div[2]/div[2]/div[223]/div[1]").scrollIntoView()
    await $("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/form[1]/div[2]/div[2]/div[2]/div[223]/div[1]").click()
    await browser.pause(4000)
    await $("//input[@name='countryCode']").setValue("7713969464")
    await browser.pause(1000)
    await $("//input[@name='reference']").setValue("AutomationTest")
    await browser.pause(1000)
    await $("//button[@type='submit']").click()
    await browser.pause(2000)
    await $("//h1[normalize-space()='Confirm payment']").waitForDisplayed()

    expect (await $("//h1[normalize-space()='Confirm payment']")).toBeDisplayed()
    await browser.pause(2000)
    await $("//span[normalize-space()='Confirm']").click()
    await browser.pause(1000)
    await Authentication.fill_in()
    await browser.pause(2000)

    expect (await $("//h1[@class='sc-hKiEVl cbdxQa']").getText()).toEqual("You've successfully confirmed the payment")
    await $("//button[@type='button']").click()
    await browser.pause(2000)
    await $("(//span[@class='text-2xl font-bold'])[1]").waitForDisplayed()
    await browser.pause(6000)
    let Balance_1 = await $("(//span[@class='text-2xl font-bold'])[1]").getText()
    Balance_1 = Balance_1.split(" ")
    Balance_1 =  Number(Balance_1[1])

    expect (await Balance_1).toEqual(await Balance - 2)
    await browser.pause(1000)
    await $("//div[@class='px-app flex justify-between']//*[name()='svg']").click()
    await browser.pause(1000)
    await $("//button[normalize-space()='Sign out']").click()
    await $("//input[@placeholder='example@gmail.com']").waitForDisplayed()
    

    });

    it('should Transfer Money -', async()=> {

        await $("//input[@placeholder='example@gmail.com']").setValue("nfg1vw5hyca7tt906p01.auto@bcvouch.com")
        await browser.pause(1000)
        await $("//input[@name='password']").setValue("StrongPa$$w0rd")
        await $("//button[@type='submit']").click()

        const modal = await $("//span[normalize-space()='Card details']")
        await modal.waitForDisplayed()
        await browser.pause(3000)
        let Balance = await $("(//span[@class='text-2xl font-bold'])[1]").getText()
        Balance = Balance.split(" ")
        Balance =  Number(Balance[1])
        
        await $("//div[contains(text(),'Transfer money')]").click()
        await browser.pause(1000)
        expect (await $("//h1[normalize-space()='Transfer money']")).toBeDisplayedInViewport()
        await browser.pause(1000)
        await $("//input[@name='amount']").setValue("2")
        await browser.pause(2000)
        await $("//input[@name='countryCode']").setValue("951471243")
        await browser.pause(1000)
        await $("//input[@name='reference']").setValue("AutomationTest")
        await browser.pause(1000)
        await $("//button[@type='submit']").click()
        await browser.pause(2000)
        await $("//h1[normalize-space()='Confirm payment']").waitForDisplayed()
    
        expect (await $("//h1[normalize-space()='Confirm payment']")).toBeDisplayed()
        await browser.pause(2000)
    
        await $("//span[normalize-space()='Confirm']").click()
        await browser.pause(1000)
        await Authentication.fill_in()
        await browser.pause(2000)
    
        expect (await $("//h1[@class='sc-hKiEVl cbdxQa']").getText()).toEqual("You've successfully confirmed the payment")
        await $("//button[@type='button']").click()
        await browser.pause(2000)
        await $("(//span[@class='text-2xl font-bold'])[1]").waitForDisplayed()
        await browser.pause(6000)
        let Balance_1 = await $("(//span[@class='text-2xl font-bold'])[1]").getText()
        Balance_1 = Balance_1.split(" ")
        Balance_1 =  Number(Balance_1[1])
    
        expect (await Balance_1).toEqual(Balance - 2)
    
        });

});


