class HomePage {
    selectorsList() {
        const selectorsHome ={
            dashboardTransactionTabs: '[data-test="nav-transaction-tabs"]',
            profileNav: '[data-test="sidenav-username"]',
            onboardPopupTitle: "[data-test='user-onboarding-dialog-title']",
            onboardPopupButtonNext: "[data-test='user-onboarding-next']",
            onboardPopupBankNameField: "[data-test='bankaccount-bankName-input']",
            onboardPopupBankRoutingNumberField: "[data-test='bankaccount-routingNumber-input']",
            onboardPopupBankAccountNumberField: "[data-test='bankaccount-accountNumber-input']",
            onboardPopupBankAccountSubmitButton: "[data-test='bankaccount-submit']",
            onboardingWrongBankNameAlert:'#bankaccount-bankName-input-helper-text',
            onboardingWrongBankRoutingNumberAlert:'#bankaccount-routingNumber-input-helper-text',
            onboardingWrongBankAccountNumberAlert:'#bankaccount-routingNumber-input-helper-text',
            buttonNavNewTransaction:"[data-test='nav-top-new-transaction']"
        }

        return selectorsHome

    }
    checkHomePage() {
        cy.location('pathname').should('equal', '/')
        
    }

    checkProfileHomePage(username) {
        cy.get(this.selectorsList().dashboardTransactionTabs).should('be.visible')
        cy.get(this.selectorsList().profileNav).contains(username)
    }

    checkOnboardPopupTitle() {
        cy.get(this.selectorsList().onboardPopupTitle).should('be.visible')
    }

    clickOnboardNextButton () {
        cy.get(this.selectorsList().onboardPopupButtonNext).click()
    }

    checkBankNameInvalid () {
        cy.get(this.selectorsList().onboardingWrongBankNameAlert).should('exist')
    }

    checkBankRoutingNumberInvalid () {
        cy.get(this.selectorsList().onboardingWrongBankRoutingNumberAlert).should('exist')
    }

    checkBankAccountNumberInvalid () {
        cy.get(this.selectorsList().onboardingWrongBankAccountNumberAlert).should('exist')
    }

    checkBankNameFieldOnboarding (){
        cy.get(this.selectorsList().onboardPopupBankNameField).click()
    }
    
    checkBankRoutingNumberFieldOnboarding(){
        cy.get(this.selectorsList().onboardPopupBankRoutingNumberField).click()
    }
    
    checkBankAccountNumberFieldOnboarding(){
        cy.get(this.selectorsList().onboardPopupBankAccountNumberField).click()
    }

    fillBankNameFieldOnboarding (name) {
        cy.get(this.selectorsList().onboardPopupBankNameField).type(name)
    }
    
    fillBankRoutingNumberFieldOnboarding (routingNumber) {
        cy.get(this.selectorsList().onboardPopupBankRoutingNumberField).type(routingNumber)
    }

    fillBankAccountNumberFieldOnboarding (accountNumber) {
        cy.get(this.selectorsList().onboardPopupBankAccountNumberField).type(accountNumber)
    }
    
    checkOnboardingSubmitButton(){
        cy.get(this.selectorsList().onboardPopupBankAccountSubmitButton).should('be.disabled')
    }

    clickOnboardBankSubmitButton () {
        cy.get(this.selectorsList().onboardPopupBankAccountSubmitButton).click()
    }

}

export default HomePage