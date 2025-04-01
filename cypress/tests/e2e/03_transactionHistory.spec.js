import LoginPage from '../../pages/loginPage'
import HomePage from '../../pages/homePage'
import NewTransactionPage from '../../pages/newTransactionPage'
import userData from '../../fixtures/userData.json'
import TransactionHistoryPage from '../../pages/transactionHistoryPage'

const loginPage = new LoginPage ()
const homePage = new HomePage()
const transactionHistoryPage = new TransactionHistoryPage()

describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações vazio de um usuário corretamente', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
        loginPage.submitLoginButton()
        homePage.checkHomePage()
        homePage.checkProfileHomePage(userData.userSuccess.username)
        homePage.clickPersonalTransactionHistory()
        transactionHistoryPage.checkPersonalTransactionHistoryPage()
      });
    
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
      loginPage.submitLoginButton()
      homePage.checkHomePage()
      homePage.checkProfileHomePage(userData.userSuccess.username)
      homePage.clickPersonalTransactionHistory()
      transactionHistoryPage.checkPersonalTransactionHistoryPage()
    });
   
  });