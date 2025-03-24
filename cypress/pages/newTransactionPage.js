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

    typeSearchField(name) {
        cy.get(this.selectorsList().inputListSearch).type(name)
    }

    clearSearchField () {
        cy.get(this.selectorsList().inputListSearch).clear()
    }

    clickUser (){
        cy.get(this.selectorsList().listUsers).find('li').eq(0).click()
    }

    checkAmmountField() {
        cy.get(this.selectorsList().inputAmountTransaction).click()
            
    }
    

    fillAmmountField (positiveValue, negativeValue, zeroValune, extremeValue){
        cy.get(this.selectorsList().inputAmountTransaction)
          .type(positiveValue, negativeValue, zeroValune, extremeValue)
        }
    

    checkNoteField(){
        cy.get(this.selectorsList().inputDescriptionTransaction).click()
    }

    fillDescriptionField(){
        cy.get(this.selectorsList().inputDescriptionTransaction).type('test')
    }

    checkButtonSubmitPayment(){
        cy.get(this.selectorsList().buttonSubmitPaymentTransaction).should('be.enabled')
    }

    clickSubmitPayment(){
        cy.get(this.selectorsList().buttonSubmitPaymentTransaction).click()
    }

    checkButtonSubmitRequest(){
        cy.get(this.selectorsList().buttonSubmitRequestTransaction).should('be.enabled')
    }

    clickSubmitRequest(){
        cy.get(this.selectorsList().buttonSubmitRequestTransaction).click()
    }




//teste
  
calculate(){
cy.get('[data-test="sidenav-user-balance"]')
  .invoke('text')
  // tip: use an assertion to print the extracted text
  .then((s) => {
    const start = s.indexOf('($')
    const end = s.indexOf(')', start)
    return s.slice(start + 2, end)
  })
  .should('be.a', 'string')
  // convert text to integer
  .then(Math.floor)
  // tip: make sure the conversion is successful
  .should('be.a', 'number')
  // compare the converted number to the expected value
  .then(cy.log)
}


   /* checkBalance(positiveValue, negativeValue, zeroValune, extremeValue){
        cy.get(this.selectorsList().balanceField)
            .invoke('text')
            .then(parseFloat)
            .then(cy.log)
            .then((scoreA) => {
                cy.get('#amount').log(positiveValue, negativeValue, zeroValune, extremeValue) 
                //.invoke('val').should('eq', positiveValue, negativeValue, zeroValune, extremeValue)
                    .then(parseFloat)
                    .then((scoreB) => {
                        expect(scoreA).to.be.greaterThan(scoreB)
                    
                    })

        })
    }*/

    successAlert(){
        cy.get(this.selectorsList().alertBarSuccess).should('be.visible')
    }

    wrongSuccessAlert(){
        cy.get(this.selectorsList().alertBarSuccess).should('be.hidden')
    }
}

export default NewTransactionPage