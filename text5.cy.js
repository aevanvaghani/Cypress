// / <reference types="Cypress" />

describe('My second Test Suite', function () {

    it('My firstTest case', function () {

        //check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

            var text = $el.text()
            if (text.includes("Python")) {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }

        })

    })

})
