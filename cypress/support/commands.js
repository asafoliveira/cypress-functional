import loc from './locators'

Cypress.Commands.add('login', (user, pwd) => {
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.get(loc.LOGIN.USER).type('papa@bento')
    cy.get(loc.LOGIN.PASSWORD).type('papabento16')
    cy.get(loc.LOGIN.BTN_LOGIN).click()
    cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
})

Cypress.Commands.add('resetApp', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.RESET).click()
})