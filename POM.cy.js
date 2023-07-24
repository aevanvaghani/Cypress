import login from"../pageObjects1/loginpage1"


// describe('pom',()=>{
//     it('logintest',()=>{
//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         cy.get("input[placeholder='Username']").type("Admin")
//         cy.get("input[placeholder='Password']").type("admin123")
//         cy.get("button[type='submit']").click()
//         cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should('have.text','Dashboard')
//     })
    // using pom 
    it.only('logintest',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

       const ln=new login()
       ln.setUsername("Admin")
       ln.setPassword("admin123")
       ln.clicksubmit()
       ln.verifylogin()

    })

    // // using pom with fixture
    // it.only('logintest',()=>{
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //    const ln=new login()
    //    ln.setUsername("Admin")
    //    ln.setPassword("admin123")
    //    ln.clicksubmit()
    //    ln.verifylogin()

    // }) 
// })
    