// / <reference types="Cypress" />

describe('My second Test Suite', function () {

    it('My firstTest case', function () {

        //check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  
        cy.get("div.mouse-hover-content").invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')

    })

})
