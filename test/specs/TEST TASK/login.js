
describe('Test Task', ()=> {
  
  it('Authorization page (Welcome back!)', async()=> {
  
    // Open home page
    await browser.url('https://www.sbzend.ssls.com')
    await $("//label[normalize-space()='Ecommerce']").waitForDisplayed()
    expect(await browser.getTitle()).toEqual('Cheap SSL Certificates—Buy SSL Certs $3.75 | 30-day trial');

    // Click on "LOG IN" text
    const loginLink = await $("//span[@class='ssls-toolbar__btn-text']")
    await loginLink.click();
    await $("//input[@placeholder='Email']").waitForDisplayed()
    expect(await browser.getTitle()).toEqual('Sign In | SSLs.com')

    // Enter valid email and password on authorization page
    const emailField = await $("//input[@placeholder='Email']")
    await emailField.setValue('ssls.automation+666@gmail.com')
    const passwordField = await $("//input[@placeholder='Enter password']")
    await passwordField.setValue('123456')
    await $("//button[@class='btn-input btn-input-block']").click();
    const password = await $("//input[@placeholder='Enter password']").getText()
  
    // Check that password is displayed
    expect (await $("//span[@class='icon icon-eye-off']")).toBeDisplayed()
    expect (password).toBeDisplayed()
    
    // Click the "Login" button
    const loginButton = await $("//button[normalize-space()='Login']")
    await loginButton.click()
    await $("//h2[normalize-space()='My SSL']").waitForDisplayed()

    // Check that home page is opened
    expect(await browser.getTitle()).toEqual('My SSL')

    // Open profile page
    const profileButton = await browser.$("(//button[@type='button'])[3]")
    await profileButton.click()
    const profileLink = await $("(//p[normalize-space()='ssls.automation+666@gmail.com'])[1]")
   

    // Check that profile page is opened and contains expected values
    expect (loginLink).not.toBeDisplayed()
    expect (profileLink).toBeDisplayed()
    

    // Log out
    const logoutButton = await browser.$("//button[normalize-space()='Log out']")
    await logoutButton.click();
    await emailField.waitForDisplayed()
    expect(await browser.getTitle()).toEqual('Sign In | SSLs.com')
  });

  it('Authorization page. Not registered user', async () => {
     // Open home page
     await browser.url('https://www.sbzend.ssls.com')
     await $("//label[normalize-space()='Ecommerce']").waitForDisplayed()
     expect(await browser.getTitle()).toEqual('Cheap SSL Certificates—Buy SSL Certs $3.75 | 30-day trial');
 
     // Click on "LOG IN" text
     const loginLink = await $("//span[@class='ssls-toolbar__btn-text']")
     await loginLink.click();
     await $("//input[@placeholder='Email']").waitForDisplayed()
     expect(await browser.getTitle()).toEqual('Sign In | SSLs.com')
 
     // Enter valid email and password on authorization page
     const emailField = await $("//input[@placeholder='Email']")
     await emailField.setValue('ssls.automation2+666@gmail.com')
     const passwordField = await $("//input[@placeholder='Enter password']")
     await passwordField.setValue('1234567');
     await $("//button[@class='btn-input btn-input-block']").click();
     const password = await $("//input[@placeholder='Enter password']").getText()
     
    // Check that password is displayed
    expect (await $("//span[@class='icon icon-eye-off']")).toBeDisplayed()
    expect (password).toBeDisplayed()
     
     // Click the "Login" button
     const loginButton = await $("//button[normalize-space()='Login']")
     await loginButton.click();
     await $("//div[@class='noty_text']").waitForClickable()
     const alert = await $("//div[@class='noty_text']").getText()
    
     // Check that errors message is displayed
      expect (alert).toEqual("Uh oh! Email or password is incorrect")
      expect(await browser.getTitle()).toEqual('Sign In | SSLs.com')
    
  });

    it('Authorization page. Invalid email', async () => {
     // Open home page
     await browser.url('https://www.sbzend.ssls.com')
     await $("//label[normalize-space()='Ecommerce']").waitForDisplayed()
     expect(await browser.getTitle()).toEqual('Cheap SSL Certificates—Buy SSL Certs $3.75 | 30-day trial');
 
     // Click on "LOG IN" text
     const loginLink = await $("//span[@class='ssls-toolbar__btn-text']")
     await loginLink.click();
     await $("//input[@placeholder='Email']").waitForDisplayed()
     expect(await browser.getTitle()).toEqual('Sign In | SSLs.com')
 
     // Enter valid email and password on authorization page
     const emailField = await $("//input[@placeholder='Email']")
     await emailField.setValue('ssls.automation2+666gmail.com')
     const passwordField = await $("//input[@placeholder='Enter password']")
     await passwordField.setValue('1234567')
     await $("//button[@class='btn-input btn-input-block']").click()
     const password = await $("//input[@placeholder='Enter password']").getText()
     
    // Check that password is displayed
    expect (await $("//span[@class='icon icon-eye-off']")).toBeDisplayed()
    expect (password).toBeDisplayed()
     
     // Click the "Login" button
     const loginButton = await $("//button[normalize-space()='Login']")
     await loginButton.click();
     await $(".tooltip-error").waitForDisplayed()
     const alert = await $(".tooltip-error").getText()
    
     // Check that errors message is displayed
      expect (alert).toEqual("Uh oh! This"+'\n'+"isn’t an email")
      expect(await browser.getTitle()).toEqual('Sign In | SSLs.com')
    
  });
  it('My profile page. Client area', async () => {
    // Open home page
    await browser.url('https://www.sbzend.ssls.com')
    await $("//label[normalize-space()='Ecommerce']").waitForDisplayed()
    expect(await browser.getTitle()).toEqual('Cheap SSL Certificates—Buy SSL Certs $3.75 | 30-day trial');

    // Click on "LOG IN" text
    const loginLink = await $("//span[@class='ssls-toolbar__btn-text']")
    await loginLink.click();
    await $("//input[@placeholder='Email']").waitForDisplayed()
    expect(await browser.getTitle()).toEqual('Sign In | SSLs.com')

    // Enter valid email and password on authorization page
    const emailField = await $("//input[@placeholder='Email']")
    await emailField.setValue('ssls.automation+666@gmail.com')
    const passwordField = await $("//input[@placeholder='Enter password']")
    await passwordField.setValue('123456')
    await $("//button[@class='btn-input btn-input-block']").click()
    const password = await $("//input[@placeholder='Enter password']").getText()
    
     // Check that password is displayed
    expect (await $("//span[@class='icon icon-eye-off']")).toBeDisplayed()
    expect (password).toBeDisplayed()
    
    
    // Click the "Login" button
    const loginButton = await $("//button[normalize-space()='Login']")
    await loginButton.click()
    await $("//h2[normalize-space()='My SSL']").waitForDisplayed()

    // Check that home page is opened
    expect(await browser.getTitle()).toEqual('My SSL')

    // Open profile page
    const profileButton = await browser.$("(//button[@type='button'])[3]")
    await profileButton.click()
    await $("//a[normalize-space()='Profile']").click()

    // Check that profile page is opened
    await $("//h1[normalize-space()='Profile']").waitForDisplayed()
    expect(await browser.getTitle()).toEqual('My Profile | SSLs.com')
   
    // Check that profile page contains valid values 
    const values = await $$('.item')
    expect (values.length).toEqual(7)
    expect (await $(`span[ng-hide="activeRow === 'email'"]`).getText()).toEqual('ssls.automation+666@gmail.com')
    expect (await $(`span[ng-hide="activeRow === 'password'"]`).getText()).toEqual('*****')

    // Log out
    await profileButton.click()
    await $("//button[normalize-space()='Log out']").click()
    await emailField.waitForDisplayed()
    expect(await browser.getTitle()).toEqual('Sign In | SSLs.com')
   
 });

 });