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
            buttonAnotherTransaction: "[data-test='new-transaction-create-another-transaction']"
        }
        
        //return selectorsNewTransaction

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
//////////////////////////////////
    getBalanceAndAmount() {
        return cy.get(this.selectorsList().balanceField)
            .invoke('text')
            .then((text) => {
                const cleanedText = text.replace(/\D/g, ''); // Remove non-numeric characters
                const balance = parseFloat(cleanedText);

                return cy.get(this.selectorsList().amountValue)
                    .invoke('val')
                    .then((value) => {
                        const cleanedValue = value.replace(/(?!-)[^0-9.]/g, "");
                        const amount = parseFloat(cleanedValue);

                        return { balance, amount };
                    });
            });
    }

    checkSubmitPaymentButton(balance, amount) {
        cy.get(this.selectorsList().buttonSubmitPaymentTransaction)
            .then(($buttonPay) => {
                console.log("Before assertion:");
                console.log("Button Disabled Property: ", $buttonPay.prop('disabled'));
                console.log("Button Disabled Class: ", $buttonPay.hasClass('Mui-disabled'));
    
                const isDisabled = amount <= 0 || amount > balance;  // Check if the amount is 0 or more than the balance
    
                // Log and assert the button's 'disabled' property and 'Mui-disabled' class
                cy.wrap($buttonPay)
                    .should('have.prop', 'disabled', isDisabled)
                    .and('have.class', isDisabled ? 'Mui-disabled' : '');  // Ensure that the button is disabled or enabled as expected
    
                console.log("After assertion:");
                console.log("Button Disabled Property: ", $buttonPay.prop('disabled'));
                console.log("Button Disabled Class: ", $buttonPay.hasClass('Mui-disabled'));
            });
    }

    // Method to check the request button
    checkSubmitRequestButton(amount) {
        cy.get(this.selectorsList().buttonSubmitRequestTransaction)
            .then(($buttonReq) => {
                if (amount <= 0) {
                    $buttonReq.prop('disabled', true);
                } else {
                    $buttonReq.prop('disabled', false);
                }
                cy.wrap($buttonReq).should('have.prop', 'disabled', amount <= 0);
            });
    }

    validateValuetTransaction() {
        const selectors = this.selectorsList();
        
        // Get the balance and parse it
        cy.get(selectors.balanceField)
            .invoke('text')
            .then((text) => {
                const cleanedText = text.replace(/\D/g, ''); // Remove non-digit characters
                const balance = parseFloat(cleanedText);
                cy.wrap(balance).as('balance'); // Store balance in the test context
            })
            .should('be.a', 'number');  // Ensure balance is a number
        
        // Get the amount and parse it
        cy.get(selectors.amountValue)
            .invoke('val')
            .then((value) => {
                const cleanedValue = value.replace(/(?!-)[^0-9.]/g, ""); // Remove non-numeric characters
                const amount = parseFloat(cleanedValue);
                cy.wrap(amount).as('amount');  // Store amount in the test context
            })
            .should('be.a', 'number');  // Ensure amount is a number
        
        // Now that we have balance and amount in the context, validate the buttons
        cy.then(function () {
            const balance = this.balance;
            const amount = this.amount;
    
            // Log balance and amount for debugging
            console.log("Balance: ", balance);
            console.log("Amount: ", amount);
    
            // Ensure balance is a valid number (greater than or equal to 0)
            expect(balance).to.gte(0);
    
            // Check if the payment button should be enabled or disabled
            cy.get(selectors.buttonSubmitPaymentTransaction)
                .then(($buttonPay) => {
                    const isDisabled = amount <= 0 || amount > balance;
    
                    // Log the current state of the button's disabled property and class
                    console.log("Button Disabled Property: ", $buttonPay.prop('disabled'));
                    console.log("Button Disabled Class: ", $buttonPay.hasClass('Mui-disabled'));
    
                    // Assert the button's 'disabled' property and 'Mui-disabled' class
                    cy.wrap($buttonPay)
                        .should('have.prop', 'disabled', isDisabled)
                        .and('have.class', isDisabled ? 'Mui-disabled' : ''); // Check if the 'Mui-disabled' class is present when button is disabled
                });
    
            // Check the submit request button based on the amount
            cy.get(selectors.buttonSubmitRequestTransaction)
                .then(($buttonReq) => {
                    const isRequestDisabled = amount <= 0;
                    
                    cy.wrap($buttonReq)
                        .should('have.prop', 'disabled', isRequestDisabled)
                        .and('have.class', isRequestDisabled ? 'Mui-disabled' : ''); // Check if the 'Mui-disabled' class is present
                });
        });
    }
    
    
         
}
   

export default NewTransactionPage