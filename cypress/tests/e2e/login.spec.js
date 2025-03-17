import LoginPage from '../../pages/loginPage'
import DashboardPage from '../../pages/dashboardPage'
import userData from '../../fixtures/userData.json'

const loginPage = new LoginPage ()
const dashboardPage = new DashboardPage()

describe('Tentar fazer login com credenciais inválidas', () => {
   
  it.only('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userSuccess.password)
    loginPage.submitLoginButton()
    loginPage.checkAccessInvalid()
    
    loginPage.accessLoginPage()
    loginPage.checkUsernameField()
    loginPage.checkPasswordField(userData.userNull.password)
    loginPage.checkUsernameInvalid()

    loginPage.accessLoginPage()
    loginPage.checkPasswordField(userData.userFail.password)
    loginPage.checkUsernameField()
    loginPage.checkPasswordInvalid()
  });

  it('Deve fazer login com um usuário válido', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    loginPage.submitLoginButton()
    dashboardPage.checkDashboardPage()

    /*
      cy.get("[data-test='user-onboarding-dialog-title']").should("be.visible").contains("Get Started with Real World App")
      cy.get("[data-test='user-onboarding-next']").click()
      cy.get("[data-test='user-onboarding-dialog-title']").should("be.visible").contains("Create Bank Account")
      cy.get("[data-test='bankaccount-bankName-input']").type("test-1")
      cy.get("[data-test='bankaccount-routingNumber-input']").type("test-1234")
      cy.get("[data-test='bankaccount-accountNumber-input']").type("test-1234")
      cy.get("[data-test='bankaccount-submit']").should("be.enabled").click()
      cy.get("[data-test='user-onboarding-dialog-title']").contains("Finished")
      cy.get("[data-test='user-onboarding-next']").click()
      cy.get('[data-test="sidenav-username"]').contains("test1user")
      cy.get('[data-test="nav-transaction-tabs"]').should('exist')
    */
   })
})