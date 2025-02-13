/// <reference types="cypress" />

export const singUpPage = {
    openCadastro() {
        return cy.get('[data-testid="signUp"] > .css-146c3p1').click()
    }
}