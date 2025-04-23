/// <reference types="cypress" />

describe('Should test at functional level', () => {
    beforeEach(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('[data-test="email"]').type('papa@bento')
        cy.get('[data-test="passwd"]').type('papabento16')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo')
    })

    it('Should create an account', () => {
        cy.get('[data-test="menu-settings"] > .fas').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test="nome"]').type('Conta Teste')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Conta inserida com sucesso')
    })

    it('Should update an account', () => {
        cy.get('[data-test="menu-settings"] > .fas').click()
        cy.get('[href="/contas"]').click()
        cy.xpath("//table//td[contains(., 'Conta Teste')]/..//i[@class='far fa-edit']")
        cy.get('[data-test="nome"]').type('Conta Teste')
          .clear()
          .type('Conta Alterada2')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Conta alterada com sucesso')
    })

})