/// <reference types="cypress" />

export const carrinhoPage = {	
   openCarrinho() {
    return cy.get('.woocommerce-message > .button').click()
   }
}