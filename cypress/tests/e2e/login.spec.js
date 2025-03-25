import LoginPage from '../../pages/loginPage'
import HomePage from '../../pages/homePage'
import userData from '../../fixtures/userData.json'

const loginPage = new LoginPage ()
const homePage = new HomePage()

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    //Fail Login
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userSuccess.password)
    loginPage.submitLoginButton()
    loginPage.checkAccessInvalid()
    //Fail Username and Login
    loginPage.accessLoginPage()
    loginPage.checkPasswordField()
    loginPage.checkUsernameInvalid()
    loginPage.checkAccessInvalid()
    //Invalid Password
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userFail.password)
    loginPage.checkUsernameField()
    loginPage.checkPasswordInvalid()
  });
})

describe('Fazer login com credenciais válidas, mas registro de banco inválido', () => {
  it('Deve fazer login com um usuário válido e falhar na criação de banco', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    loginPage.submitLoginButton()
    homePage.checkHomePage()
    homePage.checkProfileHomePage(userData.userSuccess.username)
    
    //Popup Onboarding no type
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
    //Popup Onboarding type invalid
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
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    loginPage.submitLoginButton()
    homePage.checkHomePage()
    homePage.checkProfileHomePage(userData.userSuccess.username)
    //Popup Onboarding type
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