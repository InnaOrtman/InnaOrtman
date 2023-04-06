const loginPage = require('../../pageobjects/login.page')


describe('**Incharge** WEB Page', ()=> {
    
    it('should check Account Info', async()=> {
    
    await loginPage.open()
    await loginPage.login()
  
    const modal = await $("//span[normalize-space()='Card details']")
    await modal.waitForDisplayed()
    await $("//button[2]").click()
    await browser.pause(1000)
    await $("//div[contains(text(),'Account info')]").click()
    await browser.pause(2000)
    await $("//h1[normalize-space()='Details']").waitForDisplayed()
    const user_name = await $("//input[@name='name']").getAttribute('value')
    await $("//button[normalize-space()='Bank']").click()
    await browser.pause(2000)
    await $("//div[contains(@class,'')]//div[contains(@class,'flex flex-wrap')]").waitForDisplayed()
    
    await $("//div[@class='flex items-center ']//*[name()='svg']").click()
    await browser.pause(1000)

    await $("//div[@class='px-app flex justify-between']//*[name()='svg']").click()
    await browser.pause(1000)

    expect (await $("//main[@class='h-full']")).toBeDisplayedInViewport()
    expect (await $(".text-lg").getText()).toEqual(user_name)

});

it('should check the link in FQAs', async()=> {
    await browser.pause(1000)
    await $("//h1[normalize-space()='FAQs']").click()
    await $(".text-center.text-2xl").waitForDisplayed()
    await $("//header[contains(text(),'What exchange rates do you use for currency conver')]").scrollIntoView()
    await browser.pause(1000)
    await $("//header[contains(text(),'What exchange rates do you use for currency conver')]").click()
    await browser.pause(1000)
    await $("//a[normalize-space()='here.']").click()

    await browser.pause(3000)
    expect (await browser.getTitle()).toEqual("Currency Converter - Exchange Rate Calculator | Visa")
   
    
    });

});


