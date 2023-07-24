// / <reference types="Cypress" />

describe('My second Test Suite', function () {

    it('My firstTest case', function () {

        //check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#opentab').then(function (el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit(url)
            //rahulshettyacademy.com/seleniumpractice

        })

    })

})
