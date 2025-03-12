describe('Registro de usuário com sucesso', () => {
    it('Criar o usuário corretamente', () => {
       cy.visit('/')
       cy.get("[data-test='signup']").click()
  })
})