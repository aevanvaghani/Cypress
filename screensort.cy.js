describe('ss&video', () => {

    it('My firstTest case', function () {

        cy.visit("https://www.opencart.com/index.php?route=cms/demo")

        const fileName = `example-${Date.now()}`
        cy.screenshot(fileName)
        cy.wait(1000)
        cy.get(".navbar.navbar-default.navbar-fixed-top").screenshot("account create")

        // cy.get('.nav > :nth-child(5) > a').click()
        // cy.get(".text-center.media-middle").should('have.text', 'or')

        // Cypress.Screenshot.defaults({
        // screenshotOnRunFailure: false,
        // })

    })
})
