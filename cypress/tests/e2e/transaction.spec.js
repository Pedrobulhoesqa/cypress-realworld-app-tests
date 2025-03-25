import LoginPage from '../../pages/loginPage'
import HomePage from '../../pages/homePage'
import NewTransactionPage from '../../pages/newTransactionPage'
import userData from '../../fixtures/userData.json'

const loginPage = new LoginPage ()
const homePage = new HomePage()
const newTransactionPage = new NewTransactionPage()


describe('Transação em Request', () => {
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
        newTransactionPage.compareBalance()
        newTransactionPage.clickSubmitPayment()
        newTransactionPage.successAlert()
    });

    it('Deve inpedir de realizar transferencia com saldo insuficiente', () => {
    
    })

    it('Deve impedir de realizar transferencia com valor zero', () => {
    
    })

    it('Deve impedir de realizar realizar transferencia com valor negativo', () => {
    
    })
});