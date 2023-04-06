describe('**Incharge** WEB Page', ()=> {
     
it('should create a payment in CARDEYE page', async()=> {
        
   await browser.url('https://test-cardeye:%7CFzV~%2Facm6%2Au@test-pay.cardeye.tech/sales-request-page')
    
    await $("//button[@class='btn btn-block btn_style_outline']").click()
    await browser.pause(1000)
    expect (await $("//input[@id='card_holder_name']").getValue()).toEqual('john')
    await $("//input[@id='card_holder_name']").setValue("John Doe")
    await browser.pause(1000)
    await $("//input[@id='public_key']").setValue("3Ds4yySZ0twg+uSP3xpmgzLWgyNa/dw5YVZnwG+t6ko=")
    await $("//input[@id='card_number']").setValue("4555555555554206")
    await browser.pause(1000)
    await $("//input[@id='expiry_month']").setValue("01")
    await browser.pause(1000)
    await $("//input[@id='expiry_year']").setValue("26")
    await browser.pause(1000)
    await $("//input[@id='cvv_no']").setValue("012")
    await browser.pause(1000)
    await $("//input[@id='fiat_amount']").setValue("5.16")
    await browser.pause(1000)
    await $("#first_name").setValue("John")
    await browser.pause(1000)
    await $("#last_name").setValue("Doe")
    await browser.pause(1000)
    await $("//select[@id='is_kyc']").click()
    await browser.pause(1000)
    await $("//option[@value='0']").click()
    await $("//button[normalize-space()='Process']").scrollIntoView()
    await browser.pause(2000)
    await $("//button[normalize-space()='Process']").click()
    await browser.pause(2000)
    await $("//h5[normalize-space()='Personal Information']").waitForDisplayed()
    await browser.pause(1000)
    
    await expect (await $("//a[normalize-space()='Verification']")).not.toBeDisplayed()
    const Request_Data = await $('//*[@id="raw_response_div"]')

    await expect (await Request_Data).toHaveTextContaining('ok')
    
    });

});

