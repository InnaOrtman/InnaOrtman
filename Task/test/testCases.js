const path = require('path');

const name = 'Inna';
const lastname = 'Levko';
const email = 'innalevko19.auto@bcvouch.com';
const password = 'securePwd123'

describe('Redvike QA Automation - Test Cases', () => {
    
    it('Test Case 1: Submit form with valid data', async()=> {
      browser.url('/');
      
      // Fill in the form fields with valid data
      await $("//input[@name='first_name']").setValue(name);
      await $("//input[@name='last_name']").setValue(lastname);
      await $("//input[@name='email']").setValue(email);
      await $("//input[@name='password']").setValue(password);
      await $("//input[@name='confirm_password']").setValue(password);
      
      // Slide captcha
      await $("//div[@id='slider-thumb']").dragAndDrop({ x: 600, y: 0 });
      
      // Submit the form
      await $("//input[@value='Submit']").click();
      
      // Verify the success page content
      await $("//*[normalize-space()='Successful Form Submissions']").waitForDisplayed();
      expect (await $(`//li[1]`).getText()).toEqual(`Name:\n${name} ${lastname}\nEmail:\n${email}\nAvatar:\nNo Avatar Uploaded`);
    });
  
    it('Test Case 2: Submit form with invalid data', async()=> {
      browser.url('/');

      await $("//input[@name='first_name']").setValue(name);
      await $("//input[@name='last_name']").setValue(lastname);
      await $("//input[@name='email']").setValue(email);

      // Fill in the form fields with invalid password
      await $("//input[@name='password']").setValue(password);
      await $("//input[@name='confirm_password']").setValue(password +'.');
      await $("//div[@id='slider-thumb']").dragAndDrop({ x: 600, y: 0 });
      await $("//input[@value='Submit']").click();
      
      const container = await $("div[class='container'] ul li")
      expect (await container.getText()).toEqual("Passwords do not match!");

      // Fill in the form fields with invalid email
      await $("//input[@name='confirm_password']").setValue(password);
      await $("//input[@name='email']").setValue(email+'@');
      await $("//div[@id='slider-thumb']").dragAndDrop({ x: 600, y: 0 });
      await $("//input[@value='Submit']").click();
      await browser.pause(2000);

      await expect (await $(`//h1[normalize-space()='Successful Form Submissions']`)).not.toBeDisplayed()
    });
  
    it('Test Case 3: Test slider captcha functionality', async()=> {
      browser.url('/');

      await $("//input[@name='first_name']").setValue(name);
      await $("//input[@name='last_name']").setValue(lastname);
      await $("//input[@name='email']").setValue(email);

      await $("//input[@name='password']").setValue(password);
      await $("//input[@name='confirm_password']").setValue(password);

      // Slide captcha - failed
      await $("//div[@id='slider-thumb']").dragAndDrop({ x: 200, y: 0 });
      await $("//input[@value='Submit']").click();
      
      const container = await $("div[class='container'] ul li")
      expect (await container.getText()).toEqual("Please solve the captcha!");

      // Slide captcha - failed
      await $("//div[@id='slider-thumb']").dragAndDrop({ x: 400, y: 0 });
      await $("//input[@value='Submit']").click();

      expect (await container.getText()).toEqual("Please solve the captcha!");
    });
  
    it('Test Case 4: Test form with various avatar images', async()=> {
     
      // Upload an image in invalid format
      await $("//input[@name='avatar']").setValue(path.join(__dirname, './image.pdf'));
       
      await $("//div[@id='slider-thumb']").dragAndDrop({ x: 600, y: 0 });
      await $("//input[@value='Submit']").click();

      const container = await $("div[class='container'] ul li")
      expect (await container.getText()).toEqual("Invalid image file.");

      // Upload an image in valid format (!this script can be used to test other image formats from the Page Object model!)
      await $("//input[@name='avatar']").setValue(path.join(__dirname, './image.png'));
       
      await $("//div[@id='slider-thumb']").dragAndDrop({ x: 600, y: 0 });
      await $("//input[@value='Submit']").click();

      await $("//*[normalize-space()='Successful Form Submissions']").waitForDisplayed();
      expect (await container.getText()).toEqual(`Name:\n${name} ${lastname}\nEmail:\n${email}\nAvatar:`);

    });
  });