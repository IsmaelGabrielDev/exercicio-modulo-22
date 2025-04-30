/// <reference types="cypress" />

export const selectProductPage = {
    selectProduct: (position) => {
        return cy.get('[data-testid="browse-product-list"] [data-testid="productDetails"]').eq(position).click()
    }
}   