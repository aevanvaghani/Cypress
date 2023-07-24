// / <reference types="Cypress" />

describe('My second Test Suite', function () {

    it('My firstTest case', function () {

        //check boxes
        cy.visit("https://qaclickacademy.com/practice.php")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window:alert
        cy.on('window:alert', (str) => {
            //mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', (str) => {
            //mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'qaclickacademy')
        cy.go('back')


    })



})
