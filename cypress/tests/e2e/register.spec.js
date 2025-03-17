import { be } from "date-fns/locale"
import LoginPage from '../../pages/loginPage'
import RegisterPage from '../../pages/registerPage'
import userData from '../../fixtures/userData.json'

const loginPage = new LoginPage ()
const registerPage = new RegisterPage ()

describe('Registro de usuário com sucesso', () => {
    it('Criar o usuário corretamente', () => {
       
      loginPage.accessLoginPage()
      registerPage.clickSignup()
      registerPage.checkSignupPage()
      registerPage.fillNameField(userData.userSuccess.firstName, userData.userSuccess.lastName)
      registerPage.fillUsernameField(userData.userSuccess.username)
      registerPage.fillPasswordField(userData.userSuccess.password)
      registerPage.fillConfirmPasswordField(userData.userSuccess.password)
      registerPage.clickSubmitSignup()
      loginPage.checkSigninPage()
    })
  })

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it.only('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.visit('/')
    cy.get("[data-test='signup']").click()
    cy.location('pathname').should('equal', '/signup')
    cy.get("[data-test='signup-first-name']").type("1")
    cy.get("[data-test='signup-last-name']").type("1")
    cy.get("[data-test='signup-username']").type("1")
    cy.get("[data-test='signup-password']").type("1")
    cy.get("#password-helper-text").should("be.visible")
    cy.get("[data-test='signup-confirmPassword']").type("1")
    cy.get("[data-test='signup-submit']").should("be.disabled")
  });
});