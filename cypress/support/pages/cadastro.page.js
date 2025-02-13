/// <reference types="cypress" />

class CadastroPage {

    get #firtName () { return cy.get('[data-testid="firstName"]')}
    get #lastName () { return cy.get('[data-testid="lastName"]')}
    get #phone () { return cy.get('[data-testid="phone"]')}
    get #email () { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]')}
    get #password () { return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]')}
    get #repassword () { return cy.get('[data-testid="repassword"]')}
    get #create () { return cy.get('[data-testid="create"]')}
    cadastro(firstName, lastName, phone, email, password, repassword) {
        this.#firtName.type(firstName)
        this.#lastName.type(lastName)
        this.#phone.type(phone)        
        this.#email.type(email)
        this.#password.type(password)
        this.#repassword.type(repassword)
        this.#create.click()
    }
}
module.exports = new CadastroPage();