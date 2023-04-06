const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("//input[contains(@placeholder,'example@gmail.com')]");
    }

    get inputPassword () {
        return $("//input[@name='password']");
    }

    get btnSubmit () {
        return $("//span[normalize-space()='Log me in']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login () {
        await this.inputUsername.setValue("innalevko1987@gmail.com");
        await this.inputPassword.setValue("IM1987im1987*")
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('https://app.stage.inchargecard.com/');
       
    }
}

module.exports = new LoginPage();