import { be } from "date-fns/locale"

describe('Registro de usuário com sucesso', () => {
    it('Criar o usuário corretamente', () => {
       cy.visit('/')
       cy.get("[data-test='signup']").click()
       cy.location('pathname').should('equal', '/signup')
       cy.get("[data-test='signup-first-name']").type("test")
       cy.get("[data-test='signup-last-name']").type("1")
       cy.get("[data-test='signup-username']").type("test1user")
       cy.get("[data-test='signup-password']").type("test123")
       cy.get("[data-test='signup-confirmPassword']").type("test123")
       cy.get("[data-test='signup-submit']").should("be.enabled").click()
       cy.location('pathname').should('equal', '/signin')
  })
})

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it.only('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.visit('/')
       cy.get("[data-test='signup']").click()
       cy.location('pathname').should('equal', '/signup')
       cy.get("[data-test='signup-first-name']").type("1")
       cy.get("[data-test='signup-last-name']").type("1")
       cy.get("[data-test='signup-username']").type("1")
       cy.get("[data-test='signup-password']").type("1")
       cy.get("#password-helper-text").should("be.visible")
       cy.get("[data-test='signup-confirmPassword']").type("1")
       cy.get("[data-test='signup-submit']").should("be.disabled")
  });
});