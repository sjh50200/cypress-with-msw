/// <reference types="cypress" />

describe('First e2e test', () => {
    it('what header?', () => {
        cy.visit('http://localhost:3001/');
        cy.get('#root > div').invoke("text").should('eq', '받아온 데이터는 hello world');
    })
})