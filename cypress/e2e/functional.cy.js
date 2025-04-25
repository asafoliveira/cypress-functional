/// <reference types="cypress" />

import loc from '../support/locators'
import '../support/commandsContas'

describe('Should test at functional level', () => {
    beforeEach(() => {
        cy.login('papa@bento', 'papabento16')
    })

    it('Should create an account', () => {
        cy.resetApp()
        cy.acessarMenuConta()
        cy.inserirConta('Conta Teste')
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
    })

    it('Should update an account', () => {
        cy.acessarMenuConta()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR)
        cy.get(loc.CONTAS.NOME).type('Conta Teste')
          .clear()
          .type('Conta Alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta alterada com sucesso')
    })

    it('Should not create an account with same name', () => {
        cy.acessarMenuConta()
        cy.get(loc.CONTAS.NOME).type('Conta Alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'code 400')
    })

})