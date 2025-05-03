const locators = {
    LOGIN: {
        USER: '[data-test="email"]',
        PASSWORD: '[data-test="passwd"]',
        BTN_LOGIN: '.btn'
    },

    MENU: {
        HOME: '[data-test="menu-home"]',
        SETTINGS: '[data-test="menu-settings"] > .fas',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: '[data-test="menu-movimentacao"]',
        EXTRATO: '[data-test="menu-extrato"]'
    },

    CONTAS: {
        NOME: '[data-test="nome"]',
        BTN_SALVAR: '.btn',
        XP_BTN_ALTERAR: "//table//td[contains(., 'Conta Teste')]/..//i[@class='far fa-edit']"
    },

    MOVIMENTACAO: {
        DESCRICAO: '[data-test="descricao"]',
        VALOR: '[data-test="valor"]',
        INTERESSADO: '[data-test="envolvido"]',
        STATUS: '[data-test="status"]',
        BTN_SALVAR: '.btn-primary'
    },

    EXTRATO: {
        LINHAS:'.list-group > li',
        XP_BUSCA_ELEMENTO: '//span[text()="Desc"]',
        FN_XP_REMOVER_ELEMENTO: conta => `//span[contains(., '${conta}')]/../../..//i[@class='far fa-trash-alt']`
    },

    SALDO: {
        FN_XP_SALDO_CONTA: nome =>  `//td[contains(., '${nome}')]/../td[2]` 
    },

    MESSAGE: '.toast-message'
}

export default locators;