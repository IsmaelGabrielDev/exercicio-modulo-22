import LoginPage from "../support/pages/login.page"
import produtosPage from "./page_objects/produtos.page"

Cypress.Commands.add('login', (email, senha) => {
    cy.visit('minha-conta/')
    LoginPage.login(email, senha)
})

Cypress.Commands.add('checkoutCarrinho', (nomeProduto, tamanho, cor, quantidade) => {
    cy.visit('produtos/')
    produtosPage.buscarProduto(nomeProduto)
    produtosPage.addProdutoCarrinho(tamanho, cor, quantidade)
    cy.get('.woocommerce-message').should('contain', nomeProduto)
    cy.wait(50)
});