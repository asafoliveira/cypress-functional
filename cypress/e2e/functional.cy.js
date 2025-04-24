/// <reference types="cypress" />

import loc from '../support/locators'

describe('Should test at functional level', () => {
    beforeEach(() => {
        cy.login('papa@bento', 'papabento16')
    })

    it('Should create an account', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTAS.NOME).type('Conta Teste')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
    })

    it('Should update an account', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR)
        cy.get(loc.CONTAS.NOME).type('Conta Teste')
          .clear()
          .type('Conta Alterada2')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta alterada com sucesso')
    })

})