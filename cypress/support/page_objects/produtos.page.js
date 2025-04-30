class ProdutosPage {

    visitarUrl() {
        cy.visit('produtos/')
    }

    buscarProduto(nomeProduto) {
        cy.get('[data-testid="searchInput"]').type(nomeProduto)
    }
    
    addProdutoCarrinho() {
        cy.get('[data-testid="addToCart"]').click()
    }

}

export default new ProdutosPage()