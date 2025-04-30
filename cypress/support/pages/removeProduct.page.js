/// <reference types="cypress" />

export const removeProductPage = {
    removeProduct: () => {
        return cy.get('[data-testid="remove"]').click()
    }
}