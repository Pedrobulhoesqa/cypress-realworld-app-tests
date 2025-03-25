import { be } from "date-fns/locale"
import LoginPage from '../../pages/loginPage'
import RegisterPage from '../../pages/registerPage'
import userData from '../../fixtures/userData.json'

const loginPage = new LoginPage ()
const registerPage = new RegisterPage ()

describe('Registro de usuário com sucesso', () => {
    it.only('Criar o usuário corretamente', () => {
       
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
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário ao preencher de forma invalida todas as informações', () => {
    loginPage.accessLoginPage()
    registerPage.clickSignup()
    registerPage.checkSignupPage()
    registerPage.fillNameField(userData.userFail.firstName, userData.userFail.lastName)
    registerPage.fillUsernameField(userData.userFail.username)
    registerPage.fillPasswordField(userData.userFail.password)
    registerPage.fillConfirmPasswordField(userData.userSuccess.password)
    registerPage.checkSignupInvalidPassword()
    registerPage.checkSignupInvalidConfirmPassword()
    registerPage.checkSubmitSignup()
  });
})

  describe('Tentar registrar um novo usuário com informações nulas', () => {
    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações', () => {
      loginPage.accessLoginPage()
      registerPage.clickSignup()
      registerPage.checkSignupPage()
      registerPage.checkSignupLastNameField()
      registerPage.checkSignupFirstNameField()
      registerPage.checkSignupUsernameField()
      registerPage.checkSignupPasswordField()
      registerPage.checkSignupConfirmPasswordField()
      registerPage.checkSignupFirstNameField()
      registerPage.checkSignupInvalidFirstName()
      registerPage.checkSignupInvalidLastName()
      registerPage.checkSignupInvalidUsername()
      registerPage.checkSignupInvalidPassword()
      registerPage.checkSignupInvalidConfirmPassword()
      registerPage.checkSubmitSignup()  
    });
});