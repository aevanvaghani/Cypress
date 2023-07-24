// / <reference types="Cypress" />

describe('My First Test Suite', function () {

    it('My SecondTest case', function () {

        //check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        
        //static dropdown
        cy.get('select').select('option2').should('have.value','option2')

        //dynamic dropdown
        cy.get('#autocomplete').type('india')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if($el.text()==="india")
            {
                $el.click()
            }

        })
        //autocomplete
        cy.get('#autocomplete').should('have.value','india')
        //visible invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // radio buttons

        cy.get('[value="radio2"]').check().should('be.checked')

        



    })



})
