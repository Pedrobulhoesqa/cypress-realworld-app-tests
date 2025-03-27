import { be } from "date-fns/locale"
import { existsSync } from "fs"
import { delay } from "lodash"

class NewTransactionPage {
    selectorsList() {
        const selectorsNewTransaction ={
            inputListSearch: "[data-test='user-list-search-input']",
            listUsers:'[data-test="users-list"]',
            balanceField:'[data-test="sidenav-user-balance"]',
            inputAmountTransaction: "[data-test='transaction-create-amount-input']",
            inputDescriptionTransaction: "[data-test='transaction-create-description-input']",
            wrongAmountAlert: '#transaction-create-amount-input-helper-text',
            wrongDescriptionAlert: "#transaction-create-description-input-helper-text",
            buttonSubmitRequestTransaction:"[data-test='transaction-create-submit-request']",
            buttonSubmitPaymentTransaction:"[data-test='transaction-create-submit-payment']",
            alertBarSuccess: '[data-test="alert-bar-success"]',
            buttonReturnToTransaction: "[data-test='new-transaction-return-to-transactions']",
            buttonAnotherTransaction: "[data-test='new-transaction-create-another-transaction']"
        }
        
        return selectorsNewTransaction

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
        cy.get(this.selectorsList().listUsers).should('not.be.empty')
    }

    clickUser (){
        cy.get(this.selectorsList().listUsers).find('li').eq(0).click()
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
        cy.get(this.selectorsList().inputListSearch).type(name)
    }

    clearSearchField () {
        cy.get(this.selectorsList().inputListSearch).clear()
    }

    clearAmmountField (){
        cy.get(this.selectorsList().inputAmountTransaction)
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

    validateValuetTransaction(){
        cy.get('[data-test="sidenav-user-balance"]')
          .invoke('text')
          .then((text) => {

            const cleanedText = text.replace(/\D/g, '');
            return parseFloat(cleanedText);
            })

          .should('be.a', 'number')
          .as('balance')          
                
        cy.get('#amount')
          .invoke('val')
          .then((value) => {

            const cleanedValue = value.replace(/(?!-)[^0-9.]/g, "");
            return parseFloat(cleanedValue);
           })

           .should('be.a', 'number')
           .as('amount')

        cy.then(function () {
            expect(this.balance).to.gte(0)
          })

//testar
          
const button = this.selectorsList().buttonSubmitPaymentTransaction

          cy.get(this.selectorsList().buttonSubmitPaymentTransaction)
            .then(function () {
                if (this.amount < 0) {
                    button = disabled
                }
          })
            
       /* 
        cy.get(this.selectorsList().buttonSubmitPaymentTransaction)
          
            .then(function () {
                expect(this.amount).to.be.gt(balance)
            })
            .should('be.disabled')

        cy.get(this.selectorsList().buttonSubmitRequestTransaction)
          
            .then(function () {
                expect(this.amount).to.lte(0)
            })
            .should('be.disabled') */
    }       
}

export default NewTransactionPage