import LoginPage from '../../pages/loginPage'
import HomePage from '../../pages/homePage'
import NewTransactionPage from '../../pages/newTransactionPage'
import userData from '../../fixtures/userData.json'

const loginPage = new LoginPage ()
const homePage = new HomePage()
const newTransactionPage = new NewTransactionPage()


describe('Transação em Request', () => {
    it('Deve realizar o request', () => {
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
        newTransactionPage.balance(userData.userTransaction.positiveValue)
        newTransactionPage.clickSubmitPayment()
        newTransactionPage.successAlert()
    });
});