class LoginPage {
    selectorsList() {
        const selectorsLogin ={
            usernameField: "[data-test='signin-username']", 
            passwordField: "[data-test='signin-password']",
            loginButton: "[data-test='signin-submit']",
            wrongCredentialAlert: "[data-test='signin-error']",
            requiredUsernameCredentialAlert: '#username-helper-text',
            wrongPasswordCredentialAlert: "#password-helper-text"
        }
        
        return selectorsLogin

    }
    accessLoginPage() {
        cy.visit('/signin')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
    }

    checkUsernameField(){
        cy.get(this.selectorsList().usernameField).click()
    }

    checkPasswordField(){
        cy.get(this.selectorsList().passwordField).type('1')
    }

    checkAccessInvalid () {
        cy.get(this.selectorsList().wrongCredentialAlert).should('exist')
    }

    checkUsernameInvalid () {
        cy.get(this.selectorsList().requiredUsernameCredentialAlert).should('exist')
    }

    checkPasswordInvalid () {
        cy.get(this.selectorsList().wrongPasswordCredentialAlert).should('exist')
    }

    submitLoginButton () {
        cy.get(this.selectorsList().loginButton).click().wait(1000)
    }

}

export default LoginPage