const loginPage = require('../../pageobjects/login.page')

describe('**Incharge** WEB Page', ()=> {
   
    it('should SignUp a new User', async()=> {
    
    await loginPage.open()
    
    await $("//a[normalize-space()='Sign up']").click()
    await browser.pause(2000)
    var chars = '1234567890';
    var string = '';
    for(var ii=0; ii<7; ii++){
    string += chars[Math.floor(Math.random() * chars.length)];
    }
    await browser.pause(2000)
    await $("//input[@name='countryCode']").click()
    await browser.pause(2000)
    await $("//input[@name='countryCode']").setValue("66"+string)
    await browser.pause(2000)
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for(var ii=0; ii<15; ii++){
    string += chars[Math.floor(Math.random() * chars.length)];
     }
    string = `${string}.auto@bcvouch.com`
    await $("//input[@type='email']").setValue(string)
    await $("//input[@autocomplete='given-name']").setValue("Test")
    await browser.pause(1000)
    await $("//input[@name='familyName']").setValue("Test")

    await $("(//div[@role='button'])[1]").click()
    await browser.pause(1000)
    await $("//div[normalize-space()='4']").click()
    await browser.pause(1000)
    await $("(//div[contains(@role,'button')])[2]").click()
    await browser.pause(1000)
    await $("//div[normalize-space()='Apr']").click()
    await $("(//div[@role='button'])[3]").click()
    await browser.pause(1000)
    await $("//div[normalize-space()='2001']").click()
    await browser.pause(1000)
    await $("//button[contains(@type,'submit')]").click()

    await browser.pause(2000)
    
    await $("//input[@name='password']").setValue("IM1987im1987*")
    await browser.pause(1000)
    await $("//input[@name='passwordRepeat']").setValue("IM1987im1987*")
    await browser.pause(1000)
    await $("//button[@type='submit']").click()
    await browser.pause(2000)
    await $("(//button[@type='button'])[2]").scrollIntoView()
    await browser.pause(2000)
    await $("(//button[@type='button'])[2]").click()
    await browser.pause(2000)
    
    expect (await $("//div[@class='text-center text-2xl']").getText()).toEqual("Processing...")
    await browser.pause(2000)
    await $("//button[2]").click()
    await $("(//span[normalize-space()='Skip this step (only development mode)'])[1]").waitForDisplayed()
    await $("(//span[normalize-space()='Skip this step (only development mode)'])[1]").click()
    
    await $("//div[contains(text(),'Onboarding data provided simulated successfully, it may take 1-2 min')]").waitForDisplayed()
    await $("//span[normalize-space()='Log out']").click()
    await browser.pause(2000)
    expect (await $("//input[contains(@placeholder,'example@gmail.com')]")).toBeDisplayed()
    await $("//input[contains(@placeholder,'example@gmail.com')]").setValue(string)
    await browser.pause(1000)
    await $("//input[@name='password']").setValue("IM1987im1987*")
    await browser.pause(1000)
    await $("//span[normalize-space()='Log me in']").click()
    
    await $("(//span[normalize-space()='Skip this step (only development mode)'])[1]").waitForDisplayed()
    await browser.pause(30000)
    await $("(//span[normalize-space()='Skip this step (only development mode)'])[1]").click()
    await browser.pause(2000)
    await $('//*[@id="root"]/div/div[2]/div[3]/button[1]/span[2]').click()
    await $('//*[@id="root"]/div/div[2]/button/span').waitForDisplayed()
    await browser.pause(6000)
    await $('//*[@id="root"]/div/div[2]/button/span').click()
    await $("//div[contains(text(),'Account info')]").waitForDisplayed()
    
    await expect (await $("//div[contains(text(),'Account info')]")).toBeDisplayed()


    });

});

