
class Authentication  {

    get inputPassword_1 () {
        return $("//input[@data-id='0']");
        
    }
    get inputPassword_2 () {
        return $("//input[@data-id='1']");
        
    }
    get inputPassword_3 () {
        return $("//input[@data-id='2']");
        
    }
    get inputPassword_4 () {
        return $("//input[@data-id='3']");
        
    }
    get inputPassword_5 () {
        return $("//input[@data-id='4']");
        
    }
    get inputPassword_6 () {
        return $("//input[@data-id='5']");
        
    }

    get btnSubmit () {
        return $("//h1[normalize-space()='Enter an SMS code']");
    }

    get btnList () {
        return $$(".sc-iqAclL.jibPFy");
    }
    async fill_in () {
        await this.inputPassword_1.waitForDisplayed();
        await this.inputPassword_1.setValue("1");
        await this.inputPassword_2.setValue("1");
        await this.inputPassword_3.setValue("1");
        await this.inputPassword_4.setValue("1");
        await this.inputPassword_5.setValue("1");
        await this.inputPassword_6.setValue("1");
        await this.btnSubmit.waitForDisplayed();
        await this.btnList[2].click();
    }
 
}

module.exports = new Authentication();