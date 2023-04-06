describe('**Incharge** WEB Page', ()=> {
     
it('should create a payment in CARDEYE page', async()=> {
        
    /*await browser.url('https://accounts.google.com/v3/signin/identifier?dsh=S1627865779%3A1677762475872852&continue=https%3A%2F%2Faccounts.google.com%2F%3Fhl%3Dru&followup=https%3A%2F%2Faccounts.google.com%2F%3Fhl%3Dru&hl=ru&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHfZLZDtLZGhr8EZzF_fKYDM_hAOxryXAelE3-nauKs3dJsMBZPvFD8Pf9vrA6WswATnK-LQPg')
    await $("//input[@id='identifierId']").waitForDisplayed()
    await $("//input[@id='identifierId']").setValue("inna.levko@blockchainvoucher.com")
    await browser.pause(3000)
    await $("//span[contains(text(),'Далее')]").click()
    await $("//input[@name='Passwd']").waitForDisplayed()
    await $("//input[@name='Passwd']").setValue("IM1987im1987")
    await browser.pause(3000)
    await $("//span[contains(text(),'Далее')]").click()

    await browser.navigateTo('https://staging-pay.cardeye.tech/sales-request-page')
  
    await browser.pause(30000)
    const login = 'test-cardeye'
    const password = '|FzV~/acm6*u'*/

    await browser.url('https://test-cardeye:%7CFzV~%2Facm6%2Au@test-pay.cardeye.tech/sales-request-page')
    
    await $("//button[@class='btn btn-block btn_style_outline']").click()
    await browser.pause(1000)
    expect (await $("//input[@id='card_holder_name']").getValue()).toEqual('john')
    await $("//input[@id='card_holder_name']").setValue("Inna Levko")
    await browser.pause(1000)
    await $("//input[@id='public_key']").setValue("3Ds4yySZ0twg+uSP3xpmgzLWgyNa/dw5YVZnwG+t6ko=")
    await $("//input[@id='card_number']").setValue("4555555555557102")
    await browser.pause(1000)
    await $("//input[@id='expiry_month']").setValue("12")
    await browser.pause(1000)
    await $("//input[@id='expiry_year']").setValue("25")
    await browser.pause(1000)
    await $("//input[@id='cvv_no']").setValue("272")
    await browser.pause(1000)
    await $("//input[@id='fiat_amount']").setValue("3.16")
    await browser.pause(1000)
    await $("#first_name").setValue("Inna")
    await browser.pause(1000)
    await $("#last_name").setValue("Levko")
    await browser.pause(1000)
    await $("//select[@id='is_kyc']").click()
    await browser.pause(1000)
    await $("//option[@value='0']").click()
    await $("//button[normalize-space()='Process']").scrollIntoView()
    await browser.pause(2000)
    await $("//button[normalize-space()='Process']").click()
    await browser.pause(2000)
    await $("//h5[normalize-space()='Personal Information']").waitForDisplayed()
    await browser.pause(2000)
    
    
    const Request_Data = await $('//*[@id="raw_response_div"]')

    await expect (await Request_Data).toHaveTextContaining('ok')
    
    });

});

