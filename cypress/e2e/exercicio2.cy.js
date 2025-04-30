/// <reference types="cypress" />

const dados = require('../fixtures/produtos.json')
const produtosPage = require('../support/page_objects/produtos.page')
const { checkoutPage } = require('../support/pages/checkout.page')
const { homePage } = require('../support/pages/home.page')
const loginPage = require('../support/pages/login.page')
const { removeProductPage } = require('../support/pages/removeProduct.page')
const { selectProductPage } = require('../support/pages/selectProduct.page')


describe('Exercicio 2 - Adicionar produtos ao carrinho', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
    homePage.openMenu('Account')
    loginPage.login('ismael889@ebac.art.br', 'senhateste123*')
  })

  afterEach(() => {
    removeProductPage.removeProduct()
  })
  it('Deve adicionar produtos no carrinho', () => {
    cy.intercept('get', '**/public/getCart?*').as('ProdutosCarrinho')
    homePage.openMenu('Browse')
    produtosPage.buscarProduto(dados[0].nomeProduto)
    selectProductPage.selectProduct(1)
    produtosPage.addProdutoCarrinho()
    checkoutPage.checkoutCarrinho().should('contain.text', 'Camiseta EBAC')
  })
})