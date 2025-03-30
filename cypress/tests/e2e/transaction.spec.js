import LoginPage from '../../pages/loginPage'
import HomePage from '../../pages/homePage'
import NewTransactionPage from '../../pages/newTransactionPage'
import userData from '../../fixtures/userData.json'

const loginPage = new LoginPage ()
const homePage = new HomePage()
const newTransactionPage = new NewTransactionPage()

describe('Adicionar saldo na conta', () => {
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
})

describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve realizar transferencia com saldo suficiente', () => {
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
        newTransactionPage.validateValueTransaction()
        newTransactionPage.checkButtonsState()
        newTransactionPage.clickSubmitPayment()
        newTransactionPage.alertSuccessTransaction()
    });
})

describe('Enviar dinheiro com saldo insuficiente', () => {
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
        newTransactionPage.validateValueTransaction()
        newTransactionPage.checkButtonsState()
    })
})

describe('Enviar dinheiro com saldo zero e negativo', () => {
    it('Deve impedir de realizar transferencia com valor zero', () => {
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
        newTransactionPage.validateValueTransaction()
        newTransactionPage.checkButtonsState()

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
        newTransactionPage.validateValueTransaction()
        newTransactionPage.checkButtonsState()
    })
})

describe('Funcionalidades dos campos de amigos, amount e note', () => {
    it('Deve testar o campo de amigos', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
        loginPage.submitLoginButton()
        homePage.checkHomePage()
        homePage.checkProfileHomePage(userData.userSuccess.username)
        homePage.clickNewTransaction()
        newTransactionPage.typeSearchField(userData.userTransaction.name)
        newTransactionPage.clearSearchField()
        newTransactionPage.clickOtherUser()
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
        newTransactionPage.checkNoteField()
        newTransactionPage.alertFailedAmount()
    })
});