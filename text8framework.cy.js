// / <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/productpage'
describe('My second Test Suite', () => {

    before(function () {
        // runs once before all tests in the block
        cy.fixture('example').then( (data) => {
             this.data = data
        })
    })

    it('My firstTest case', () =>{
        const homePage= new HomePage()
        const productPage = new ProductPage()

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEnterpreneaur().should('be.disabled')

        homePage.getShopTab().click()

        
        this.data.productName.forEach((element) => {

            cy.selectproduct(element)
        })
       productPage.checkOutButton.click()
        var sum=0

        cy.get('tr td:nth-child(4) strong').its(1).each(($el, index, $list) =>{
            const amount=$el.text()
            var res=amount.split(" ")
            res= res[1].trim()
            sum=sum+Number(res)
            
        })
        cy.log(sum)
        cy.contains('Checkout').click()
        cy.get('#country').type('India')

     

    })

})


