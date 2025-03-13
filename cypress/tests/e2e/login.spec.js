  describe('Login com sucesso', () => {
   it('Deve fazer login com um usuário válido', () => {
      cy.visit('/signin')
      cy.get("[data-test='signin-username']").type("test1user")
      cy.get("[data-test='signin-password']").type("test123")
      cy.get("[data-test='signin-submit']").should("be.enabled").click()
      cy.location('pathname').should('equal', '/')
      cy.get("[data-test='user-onboarding-dialog-title']").should("be.visible").contains("Get Started with Real World App")
      cy.get("[data-test='user-onboarding-next']").click()
      cy.get("[data-test='user-onboarding-dialog-title']").should("be.visible").contains("Create Bank Account")
      cy.get("[data-test='bankaccount-bankName-input']").type("test-1")
      cy.get("[data-test='bankaccount-routingNumber-input']").type("test-1234")
      cy.get("[data-test='bankaccount-accountNumber-input']").type("test-1234")
      cy.get("[data-test='bankaccount-submit']").should("be.enabled").click()
      cy.get("[data-test='user-onboarding-dialog-title']").contains("Finished")
      cy.get("[data-test='user-onboarding-next']").click()
      cy.get('[data-test="sidenav-username"]').contains("test1user")
      cy.get('[data-test="nav-transaction-tabs"]').should('exist')

   });
 });