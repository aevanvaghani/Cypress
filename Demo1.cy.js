import demo from"../pageObjects1/demo1"

// describe('pom',()=>{
//     it('demotest',()=>{

        // cy.visit("https://katalon-demo-cura.herokuapp.com")
        // cy.get("#btn-make-appointment").click()
        // cy.get("#txt-username").type("John Doe")
        // cy.get("#txt-password").type("ThisIsNotAPassword")
        // cy.get("#btn-login").click()
        // cy.get("#combo_facility").select("Seoul CURA Healthcare Center")
        // cy.get("#chk_hospotal_readmission").check().should('be.checked')
        // cy.get("#radio_program_medicare").first().check()
//     })

// })
it.only('test',()=>{
    cy.visit("https://katalon-demo-cura.herokuapp.com")
    const aa=new demo()
    aa.setapp()
    aa.setuser("John Doe")
    aa.setpassword("ThisIsNotAPassword")
    aa.setlogin()
    aa.setche()
    aa.setfirst()

})