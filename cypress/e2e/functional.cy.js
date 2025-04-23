/// <reference types="cypress" />

describe('Should test at functional level', () => {
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/');
    })

    it('Login', () => {
        cy.get('[data-test="email"]').type('papa@bento')
        cy.get('[data-test="passwd"]').type('papabento16')
        cy.get('.btn').click()
        cy.get('.toast-message').should('exist')
    })
})