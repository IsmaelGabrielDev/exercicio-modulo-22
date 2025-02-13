/// <reference types="cypress" />

const { nome, sobrenome, telefone, email, senha, confirmarSenha } = require("../fixtures/data.json")
const cadastroPage = require("../support/pages/cadastro.page")
const { homePage } = require("../support/pages/home.page")
const { profilePage } = require("../support/pages/profile.page")
const { singUpPage } = require("../support/pages/singUp.page")

describe('Exercicio 1 - Criação de cadastro de usuário', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  })
  it('Deve criar um cadastro de usuário', () => {
    homePage.openMenu('Account')
    singUpPage.openCadastro()
    cadastroPage.cadastro(nome, sobrenome, telefone, email, senha, confirmarSenha)
    homePage.openMenu('Account')
    profilePage.customerName().should('have.text', `${sobrenome} ${nome}`)
  })
})