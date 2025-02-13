/// <reference types="cypress" />

const dados = require('../fixtures/produtos.json')
const { carrinhoPage } = require('../support/pages/carrinho.page')
const { checkoutPage } = require('../support/pages/checkout.page')


describe('Exercicio 2 - Adicionar produtos ao carrinho', () => {

  beforeEach(() => {
    cy.login('aluno_ebac@teste.com', 'teste@teste.com')
  })
  it('Deve adicionar produtos no carrinho', () => {
    cy.checkoutCarrinho(dados[0].nomeProduto, dados[0].tamanho, dados[0].cor, dados[0].quantidade)
    cy.checkoutCarrinho(dados[1].nomeProduto, dados[1].tamanho, dados[1].cor, dados[1].quantidade)
    cy.checkoutCarrinho(dados[2].nomeProduto, dados[2].tamanho, dados[2].cor, dados[2].quantidade)
    cy.checkoutCarrinho(dados[3].nomeProduto, dados[3].tamanho, dados[3].cor, dados[3].quantidade)
    carrinhoPage.openCarrinho()
    checkoutPage.checkoutCarrinho().should('contain' , 'Total no carrinho')
  })
})