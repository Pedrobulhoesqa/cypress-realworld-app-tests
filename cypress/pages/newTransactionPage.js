import { be } from "date-fns/locale"
import { existsSync } from "fs"
import { delay } from "lodash"

class NewTransactionPage {
    selectorsList() {
        return {
            inputListSearch: "[data-test='user-list-search-input']",
            listUsers:'[data-test="users-list"]',
            balanceField:'[data-test="sidenav-user-balance"]',
            inputAmountTransaction: "[data-test='transaction-create-amount-input']",
            amountValue: "#amount",
            inputDescriptionTransaction: "[data-test='transaction-create-description-input']",
            wrongAmountAlert: '#transaction-create-amount-input-helper-text',
            wrongDescriptionAlert: "#transaction-create-description-input-helper-text",
            buttonSubmitRequestTransaction:"[data-test='transaction-create-submit-request']",
            buttonSubmitPaymentTransaction:"[data-test='transaction-create-submit-payment']",
            alertBarSuccess: '[data-test="alert-bar-success"]',
            buttonReturnToTransaction: "[data-test='new-transaction-return-to-transactions']",
            buttonAnotherTransaction: "[data-test='new-transaction-create-another-transaction']",
            checkClickOneUser: '[data-test="user-list-item-_XblMqbuoP"]'
        }
    }

    checkNewTransactionPage() {
        cy.location('pathname').should('equal', '/transaction/new')
    }

    checkNoteField(){
        cy.get(this.selectorsList().inputDescriptionTransaction).click()
    }

    checkAmmountField() {
        cy.get(this.selectorsList().inputAmountTransaction).click()           
    }

    checkListUsers() {
        cy.get(this.selectorsList().listUsers).should('be.visible')
    }

    clickUser (){
        cy.get(this.selectorsList().listUsers).find('li').eq(0).click()
    }

    clickOtherUser() {
        cy.get(this.selectorsList().checkClickOneUser).click()           
    }
    
    clickSubmitPayment(){
        cy.get(this.selectorsList().buttonSubmitPaymentTransaction).click()
    }

    clickSubmitRequest(){
        cy.get(this.selectorsList().buttonSubmitRequestTransaction).click()
    }

    fillAmmountField (positiveValue, negativeValue, zeroValune, extremeValue, specialCharacters){
        cy.get(this.selectorsList().inputAmountTransaction)
          .type(positiveValue, negativeValue, zeroValune, extremeValue, )         
    }

    fillDescriptionField(){
        cy.get(this.selectorsList().inputDescriptionTransaction).type('test')
    }

    typeSearchField(name) {
        cy.get(this.selectorsList().inputListSearch).type(name, { delay: 100 })
    }

    clearSearchField () {
        cy.get(this.selectorsList().inputListSearch).clear().wait(100)
    }

    clearAmmountField (){
        cy.get(this.selectorsList().amountValue)
          .clear()         
    }

    alertSuccessTransaction(){
        cy.get(this.selectorsList().alertBarSuccess).should('be.visible')
    }

    alertFailedAmount(){
        cy.get(this.selectorsList().wrongAmountAlert).should('be.visible')
    }

    alertFailedNote(){
        cy.get(this.selectorsList().wrongDescriptionAlert).should('be.visible')
    }

    validateValueTransaction() {
        const selectors = this.selectorsList();
    
        cy.get(selectors.balanceField)
          .invoke('text')
          .then((text) => {
            const balance = parseFloat(text.replace(/\D/g, ''))
            expect(balance).to.be.gte(0)
        
        cy.get(selectors.amountValue)
          .invoke('val')
          .then((value) => {
              const amount = parseFloat(value.replace(/(?!-)[^0-9.]/g, ""))
              expect(amount).to.be.a('number')
            
              this.checkButtonsState(amount, balance)
            })
        })
    }

    checkButtonsState(amount, balance) {
        const selectors = this.selectorsList()
        const isRequestButtonDisabled = (amount <= 0)

    cy.get(selectors.buttonSubmitRequestTransaction)
      .should('have.prop', 'disabled', isRequestButtonDisabled)
      .then(($button) => {

        if (isRequestButtonDisabled) {
          expect($button).to.have.class('Mui-disabled')
        } else {
          expect($button).to.not.have.class('Mui-disabled')
        }
      })

        const isPayButtonDisabled = (amount <= 0 || amount > balance)

    cy.get(selectors.buttonSubmitPaymentTransaction)
      .should('have.prop', 'disabled', isPayButtonDisabled)
      .then(($button) => {

        if (isPayButtonDisabled) {
          expect($button).to.have.class('Mui-disabled');
        } else {
          expect($button).to.not.have.class('Mui-disabled');
        }
       });
    }        
}
   

export default NewTransactionPage