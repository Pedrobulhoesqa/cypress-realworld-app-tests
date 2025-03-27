import LoginPage from '../../pages/loginPage'
import HomePage from '../../pages/homePage'
import NewTransactionPage from '../../pages/newTransactionPage'
import userData from '../../fixtures/userData.json'

const loginPage = new LoginPage ()
const homePage = new HomePage()
const newTransactionPage = new NewTransactionPage()

describe('Transação em Request', () => {

    it('Setup balance, com valor negativo', ()=> {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
        loginPage.submitLoginButton()
        homePage.checkHomePage()
        homePage.checkProfileHomePage(userData.userSuccess.username)
        homePage.clickNewTransaction()
        newTransactionPage.typeSearchField(userData.userTransaction.name)
        newTransactionPage.clickUser()
        newTransactionPage.fillAmmountField(userData.userTransaction.negativeValue)
        newTransactionPage.fillDescriptionField()
        newTransactionPage.clickSubmitPayment()
        newTransactionPage.alertSuccessTransaction()
    })

    it.only('Deve realizar transferencia com saldo suficiente', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
        loginPage.submitLoginButton()
        homePage.checkHomePage()
        homePage.checkProfileHomePage(userData.userSuccess.username)
        homePage.clickNewTransaction()
        newTransactionPage.typeSearchField(userData.userTransaction.name)
        newTransactionPage.clickUser()
        newTransactionPage.fillAmmountField(userData.userTransaction.positiveValue)
        newTransactionPage.fillDescriptionField()
        newTransactionPage.validateValuetTransaction()
        /*newTransactionPage.getBalanceAndAmount().then(({ balance, amount }) => {
            console.log("Balance from spec: ", balance);
            console.log("Amount from spec: ", amount);

            // Check if the payment button is disabled/enabled
            newTransactionPage.checkSubmitPaymentButton(balance, amount);
            // Check if the request button is disabled/enabled
            newTransactionPage.checkSubmitRequestButton(amount);
        })*/
        /////
        newTransactionPage.clickSubmitPayment()
        newTransactionPage.alertSuccessTransaction()
    });

    it('Deve impedir de realizar transferencia com saldo insuficiente', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
        loginPage.submitLoginButton()
        homePage.checkHomePage()
        homePage.checkProfileHomePage(userData.userSuccess.username)
        homePage.clickNewTransaction()
        newTransactionPage.typeSearchField(userData.userTransaction.name)
        newTransactionPage.clickUser()
        newTransactionPage.fillAmmountField(userData.userTransaction.extremeValue)
        newTransactionPage.fillDescriptionField()
        newTransactionPage.validateValuetTransaction()
    })

    it.only('Deve impedir de realizar transferencia com valor zero', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
        loginPage.submitLoginButton()
        homePage.checkHomePage()
        homePage.checkProfileHomePage(userData.userSuccess.username)
        homePage.clickNewTransaction()
        newTransactionPage.typeSearchField(userData.userTransaction.name)
        newTransactionPage.clickUser()
        newTransactionPage.fillAmmountField(userData.userTransaction.zeroValue)
        newTransactionPage.fillDescriptionField()
        newTransactionPage.validateValuetTransaction()
       /* newTransactionPage.getBalanceAndAmount().then(({ balance, amount }) => {
            console.log("Balance from spec: ", balance);
            console.log("Amount from spec: ", amount);

            // Check if the payment button is disabled/enabled
            newTransactionPage.checkSubmitPaymentButton(balance, amount);
            // Check if the request button is disabled/enabled
            newTransactionPage.checkSubmitRequestButton(amount);
        })
        cy.get(newTransactionPage.selectorsList().buttonSubmitPaymentTransaction)
        .should('have.prop', 'disabled', true);*/
        newTransactionPage.getBalanceAndAmount()
        newTransactionPage.checkSubmitPaymentButton();
        newTransactionPage.checkSubmitRequestButton();

    })

    it('Deve impedir de realizar realizar transferencia com valor negativo', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
        loginPage.submitLoginButton()
        homePage.checkHomePage()
        homePage.checkProfileHomePage(userData.userSuccess.username)
        homePage.clickNewTransaction()
        newTransactionPage.typeSearchField(userData.userTransaction.name)
        newTransactionPage.clickUser()
        newTransactionPage.fillAmmountField(userData.userTransaction.negativeValue)
        newTransactionPage.fillDescriptionField()
        //newTransactionPage.validateValuetTransaction()
        newTransactionPage.getBalanceAndAmount().then(({ balance, amount }) => {
            console.log("Balance from spec: ", balance);
            console.log("Amount from spec: ", amount);

            // Check if the payment button is disabled/enabled
            newTransactionPage.checkSubmitPaymentButton(balance, amount);
            // Check if the request button is disabled/enabled
            newTransactionPage.checkSubmitRequestButton(amount);
        })
    })

    it('Deve testar o campo de amigos', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
        loginPage.submitLoginButton()
        homePage.checkHomePage()
        homePage.checkProfileHomePage(userData.userSuccess.username)
        homePage.clickNewTransaction()
        newTransactionPage.typeSearchField(userData.userTransaction.name)
        newTransactionPage.clearSearchField()
        newTransactionPage.checkListUsers()
        newTransactionPage.clickUser()
    })

    it('Deve testar os campos de Amount e Note', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
        loginPage.submitLoginButton()
        homePage.checkHomePage()
        homePage.checkProfileHomePage(userData.userSuccess.username)
        homePage.clickNewTransaction()
        newTransactionPage.typeSearchField(userData.userTransaction.name)
        newTransactionPage.clickUser()
        newTransactionPage.checkAmmountField()
        newTransactionPage.checkNoteField()
        newTransactionPage.checkAmmountField()
        newTransactionPage.alertFailedAmount()
        newTransactionPage.alertFailedNote()
        newTransactionPage.fillAmmountField(userData.userTransaction.negativeValue)
        newTransactionPage.clearAmmountField()
        newTransactionPage.fillAmmountField(userData.userTransaction.specialCharacters)
        newTransactionPage.alertFailedAmount()
    })
});