class TransactionPage {
    /*selectorsList() {
        const selectorsLogin ={
            signinUsernameField: "[data-test='signin-username']", 
            signinPasswordField: "[data-test='signin-password']",
            loginButton: "[data-test='signin-submit']",
            signinWrongCredentialAlert: "[data-test='signin-error']",
            signinRequiredUsernameCredentialAlert: '#username-helper-text',
            signinWrongPasswordCredentialAlert: "#password-helper-text",
        }
        
        return selectorsLogin

    }
    accessLoginPage() {
        cy.visit('/signin')
    }

    checkSigninPage() {
        cy.location('pathname').should('equal', '/signin')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().signinUsernameField).type(username)
        cy.get(this.selectorsList().signinPasswordField).type(password)
    }

    checkUsernameField () {
        cy.get(this.selectorsList().signinUsernameField).click()
    }*/

}

export default TransactionPage