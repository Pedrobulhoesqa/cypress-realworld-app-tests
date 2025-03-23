import LoginPage from '../../pages/loginPage'
import HomePage from '../../pages/homePage'
import NewTransactionPage from '../../pages/newTransactionPage'
import userData from '../../fixtures/userData.json'

const loginPage = new LoginPage ()
const homePage = new HomePage()
const transactionPage = new NewTransactionPage()


describe('Transação em Request', () => {
    it('Deve realizar o request', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
        loginPage.submitLoginButton()
        homePage.checkHomePage()
        homePage.checkProfileHomePage(userData.userSuccess.username)
        cy.get('[data-test="nav-top-new-transaction"]').click()
        cy.get('[data-test="users-list"]').find('li').eq(1).click()
        cy.get("[data-test='transaction-create-amount-input']").type("1")
        cy.get("[data-test='transaction-create-description-input']").type("test")
        cy.get("[data-test='transaction-create-submit-request']").click()
        cy.get('[data-test="alert-bar-success"]').should('be.visible')
    });
});