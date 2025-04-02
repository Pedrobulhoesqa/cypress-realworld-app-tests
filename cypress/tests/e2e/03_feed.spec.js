import LoginPage from '../../pages/loginPage'
import HomePage from '../../pages/homePage'
import userData from '../../fixtures/userData.json'
import FeedPage from '../../pages/feedPage'

const loginPage = new LoginPage ()
const homePage = new HomePage()
const feedPage = new FeedPage()

describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações vazio de um usuário corretamente', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userOne.username, userData.userOne.password)
    loginPage.submitLoginButton()
    homePage.checkHomePage()
    homePage.checkProfileHomePage(userData.userOne.username)
    homePage.clickPersonalFeedNav()
    feedPage.checkPersonalFeedPage()
  });
});  

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userTwo.username, userData.userTwo.password)
    loginPage.submitLoginButton()
    homePage.checkHomePage()
    homePage.checkProfileHomePage(userData.userTwo.username)
    homePage.clickPersonalFeedNav()
    feedPage.checkPersonalFeedPage()          
  });
});
   
  