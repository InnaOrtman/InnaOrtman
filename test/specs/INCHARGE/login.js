


describe('Test Task', ()=> {
  
  it('should Login', async()=> {
  
    // Open home page
    await browser.url('https://www.sbzend.ssls.com')
    await $("//span[@class='ssls-toolbar__btn-text']").waitForDisplayed()
    expect(await browser.getTitle()).toEqual('Cheap SSL Certificates—Buy SSL Certs $3.75 | 30-day trial');

    // Click on "LOG IN" text
    const loginLink = await $("//span[@class='ssls-toolbar__btn-text']");
    await loginLink.click();
    await $("//input[@placeholder='Email']").waitForDisplayed()

    // Enter valid email and password on authorization page
    const emailField = await $("//input[@placeholder='Email']");
    await emailField.setValue('ssls.automation+666@gmail.com');
    const passwordField = await $("//input[@placeholder='Enter password']");
    await passwordField.setValue('123456');

    // Click the "Login" button
    const loginButton = await browser.$("//button[normalize-space()='Login']");
    await loginButton.click();
    await browser.pause(5000)
    // Check that home page is opened
    expect(await browser.getTitle()).toEqual('Cheap SSL Certificates—Buy SSL Certs $3.75 | 30-day trial');

    // Open profile page
    const profileButton = await browser.$('//button[contains(@class, "ProfileToggle")]');
    await profileButton.click();
    const profileLink = await browser.$('//a[text()="Profile"]');
    await profileLink.click();

    // Check that profile page is opened and contains expected values
    expect(await browser.getTitle()).to.equal('Profile | SSLs.com');
    const nameField = await browser.$('//label[text()="Name"]/following-sibling::div');
    expect(await nameField.getText()).to.equal('Automated User');
    const emailFieldValue = await browser.$('//label[text()="Email"]/following-sibling::div');
    expect(await emailFieldValue.getText()).to.equal('ssls.automation+666@gmail.com');
    const phoneField = await browser.$('//label[text()="Phone"]/following-sibling::div');
    expect(await phoneField.getText()).to.equal('123456789');
    const addressField = await browser.$('//label[text()="Address"]/following-sibling::div');
    expect(await addressField.getText()).to.equal('123 Main St, Anytown USA');
    const supportPinField = await browser.$('//label[text()="Support Pin"]/following-sibling::div');
    expect(await supportPinField.getText()).to.match(/^\d{6}$/);
    const newsletterField = await browser.$('//label[text()="Newsletter"]/following-sibling::div');
    expect(await newsletterField.getText()).to.equal('Yes');

    // Log out
    const logoutButton = await browser.$('//a[text()="Logout"]');
    await logoutButton.click();
    expect(await browser.getTitle()).to.equal('SSL Certificates & Security Solutions | SSLs.com');
  });

  it('should display error message for not registered user', async () => {
    // Open home page
    await browser.url('/');
    expect(await browser.getTitle()).to.equal('SSL Certificates & Security Solutions | SSLs.com');

    // Click on "LOG IN" text
    const loginLink = await browser.$('//a[text()="LOG IN"]');
    await loginLink.click();

    // Enter not registered email and any password on authorization page
    const emailField = await browser.$('#email');
    
  });
 });