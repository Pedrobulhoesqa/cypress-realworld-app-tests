class NewTransactionPage {
    selectorsList() {
        const selectorsNewTransaction ={
            inputListSearch: "[data-test='user-list-search-input']",
            listUsers:'[data-test="users-list"]',
            checkIconStep:"[data-testid='CheckCircleIcon']",
            inputAmountTransaction: "[data-test='transaction-create-amount-input']",
            inputDescriptionTransaction: "[data-test='transaction-create-description-input']",
            wrongAmountAlert: '#transaction-create-amount-input-helper-text',
            wrongDescriptionAlert: "#transaction-create-description-input-helper-text",
            buttonSubmitRequestTransaction:"[data-test='transaction-create-submit-request']",
            buttonSubmitPaymentTransaction:"[data-test='transaction-create-submit-payment']",
            alertBarSuccess: '[data-test="alert-bar-success"]',
            buttonReturnToTransaction: "[data-test='new-transaction-return-to-transactions']",
            buttonAnotherTransaction: "[data-test='new-transaction-create-another-transaction']",
            alertBarSuccess: '[data-test="alert-bar-success"]'
        }
        
        return selectorsNewTransaction

    }


    /*checkNewTransactionPage() {
        cy.location('pathname').should('equal', '/transaction/new')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().signinUsernameField).type(username)
        cy.get(this.selectorsList().signinPasswordField).type(password)
    }

    checkUsernameField () {
        cy.get(this.selectorsList().signinUsernameField).click()
    }*/

}

export default NewTransactionPage