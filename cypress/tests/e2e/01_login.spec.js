import LoginPage from '../../pages/loginPage'
import HomePage from '../../pages/homePage'
import RegisterPage from '../../pages/registerPage'
import userData from '../../fixtures/userData.json'

const registerPage = new RegisterPage()
const loginPage = new LoginPage ()
const homePage = new HomePage()

describe('Registro de usuário com sucesso', () => {
  it.only('Criar o usuário corretamente', () => {    
    loginPage.accessLoginPage()
    registerPage.clickSignup()
    registerPage.checkSignupPage()
    registerPage.fillNameField(userData.userOne.firstName, userData.userOne.lastName)
    registerPage.fillUsernameField(userData.userOne.username)
    registerPage.fillPasswordField(userData.userOne.password)
    registerPage.fillConfirmPasswordField(userData.userOne.password)
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
    registerPage.fillConfirmPasswordField(userData.userOne.password)
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

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userOne.password)
    loginPage.submitLoginButton()
    loginPage.checkAccessInvalid()
    loginPage.accessLoginPage()
    loginPage.checkPasswordField()
    loginPage.checkUsernameInvalid()
    loginPage.checkAccessInvalid()
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userOne.username, userData.userFail.password)
    loginPage.checkUsernameField()
    loginPage.checkPasswordInvalid()
  });
})

describe('Fazer login com credenciais válidas, mas registro de banco inválido', () => {
  it('Deve fazer login com um usuário válido e falhar na criação de banco', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userOne.username, userData.userOne.password)
    loginPage.submitLoginButton()
    homePage.checkHomePage()
    homePage.checkProfileHomePage(userData.userOne.username)
    homePage.checkOnboardPopupTitle()
    homePage.clickOnboardNextButton()
    homePage.checkOnboardPopupTitle()
    homePage.checkBankNameFieldOnboarding()
    homePage.checkBankRoutingNumberFieldOnboarding()
    homePage.checkBankAccountNumberFieldOnboarding ()
    homePage.checkBankNameInvalid()
    homePage.checkBankRoutingNumberInvalid()
    homePage.checkBankAccountNumberInvalid()
    homePage.checkOnboardingSubmitButton()
    homePage.fillBankNameFieldOnboarding(userData.bankFail.name)
    homePage.fillBankRoutingNumberFieldOnboarding(userData.bankFail.routingNumber)
    homePage.fillBankAccountNumberFieldOnboarding (userData.bankFail.accountNumber)
    homePage.checkBankNameInvalid()
    homePage.checkBankRoutingNumberInvalid()
    homePage.checkBankAccountNumberInvalid()
    homePage.checkOnboardingSubmitButton()
  })
})

describe('Fazer login com credenciais válidas', () => {
  it.only('Deve fazer login com um usuário válido e completar a criação de banco', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userOne.username, userData.userOne.password)
    loginPage.submitLoginButton()
    homePage.checkHomePage()
    homePage.checkProfileHomePage(userData.userOne.username)
    homePage.checkOnboardPopupTitle()
    homePage.clickOnboardNextButton()
    homePage.checkOnboardPopupTitle()
    homePage.fillBankNameFieldOnboarding(userData.bankSuccess.name)
    homePage.fillBankRoutingNumberFieldOnboarding(userData.bankSuccess.routingNumber)
    homePage.fillBankAccountNumberFieldOnboarding (userData.bankSuccess.accountNumber)
    homePage.clickOnboardBankSubmitButton()
    homePage.checkOnboardPopupTitle()
    homePage.clickOnboardNextButton()
  })
})

  describe('Registro de um segundo usuário com sucesso', () => {
    it.only('Criar o segundo usuário corretamente', () => {    
      loginPage.accessLoginPage()
      registerPage.clickSignup()
      registerPage.checkSignupPage()
      registerPage.fillNameField(userData.userTwo.firstName, userData.userTwo.lastName)
      registerPage.fillUsernameField(userData.userTwo.username)
      registerPage.fillPasswordField(userData.userTwo.password)
      registerPage.fillConfirmPasswordField(userData.userTwo.password)
      registerPage.clickSubmitSignup()
      loginPage.checkSigninPage()
      loginPage.loginWithUser(userData.userTwo.username, userData.userTwo.password)
      loginPage.submitLoginButton()
      homePage.checkHomePage()
      homePage.checkProfileHomePage(userData.userTwo.username)
      homePage.checkOnboardPopupTitle()
      homePage.clickOnboardNextButton()
      homePage.checkOnboardPopupTitle()
      homePage.fillBankNameFieldOnboarding(userData.bankSuccess.name)
      homePage.fillBankRoutingNumberFieldOnboarding(userData.bankSuccess.routingNumber)
      homePage.fillBankAccountNumberFieldOnboarding (userData.bankSuccess.accountNumber)
      homePage.clickOnboardBankSubmitButton()
      homePage.checkOnboardPopupTitle()
      homePage.clickOnboardNextButton()
    })  
})