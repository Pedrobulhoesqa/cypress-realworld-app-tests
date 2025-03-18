class RegisterPage {
    selectorsList() {
        const selectorsRegister ={
            signupButton: "[data-test='signup']",
            signupFirstNameField: "[data-test='signup-first-name']",
            signupLastNameField: "[data-test='signup-last-name']",
            signupUsernameField: "[data-test='signup-username']",
            signupPasswordField: "[data-test='signup-password']",
            signupConfirmPasswordField: "[data-test='signup-confirmPassword']",
            signupSubmitButton: "[data-test='signup-submit']",
            signupWrongFirstNameAlert: '#firstName-helper-text',
            signupWrongLastNameAlert: '#lastName-helper-text',
            signupWrongUsernameAlert: '#lastName-helper-text',
            signupWrongPasswordAlert: '#confirmPassword-helper-text',
            signupWrongConfirmPasswordAlert: '#confirmPassword-helper-text'
        }
        
        return selectorsRegister

    }

    clickSignup() {
        cy.get(this.selectorsList().signupButton).click()
    }

    checkSignupPage() {
        cy.location('pathname').should('equal', '/signup')
    }
    
    checkSignupFirstNameField() {
        cy.get(this.selectorsList().signupFirstNameField).click()
    }

    checkSignupLastNameField() {
        cy.get(this.selectorsList().signupLastNameField).click()
    }

    checkSignupUsernameField() {
        cy.get(this.selectorsList().signupUsernameField).click()
    }

    checkSignupPasswordField() {
        cy.get(this.selectorsList().signupPasswordField).click()
    }

    checkSignupConfirmPasswordField() {
        cy.get(this.selectorsList().signupConfirmPasswordField).click()
    }

    checkSignupInvalidFirstName() {
        cy.get(this.selectorsList().signupWrongFirstNameAlert).should('exist')
    }

    checkSignupInvalidLastName() {
        cy.get(this.selectorsList().signupWrongLastNameAlert).should('exist')
    }

    checkSignupInvalidUsername() {
        cy.get(this.selectorsList().signupWrongUsernameAlert).should('exist')
    }

    checkSignupInvalidPassword() {
        cy.get(this.selectorsList().signupWrongPasswordAlert).should('exist')
    }
    
    checkSignupInvalidConfirmPassword() {
        cy.get(this.selectorsList().signupWrongUsernameAlert).should('exist')
    }

    checkSubmitSignup() {
        cy.get(this.selectorsList().signupSubmitButton).should('be.disabled')
    }

    fillNameField(firstName, lastName) {
        cy.get(this.selectorsList().signupFirstNameField).type(firstName)
        cy.get(this.selectorsList().signupLastNameField).type(lastName)
    }

    fillUsernameField(username) {
        cy.get(this.selectorsList().signupUsernameField).type(username)
    }

    fillPasswordField(password) {
        cy.get(this.selectorsList().signupPasswordField).type(password)
    }

    fillConfirmPasswordField(password) {
        cy.get(this.selectorsList().signupConfirmPasswordField).type(password)
    }

    clickSubmitSignup() {
        cy.get(this.selectorsList().signupSubmitButton).click()
    }
}

export default RegisterPage