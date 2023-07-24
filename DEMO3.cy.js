import demo3 from "../pageObjects1/demo3"

describe('demo', () => {
    it('demo3', () => {
        cy.visit("https://www.telerik.com/support/demos")

        const demo = new demo3
        demo.clicktodots()
        demo.pagelogin()
        demo.emailtype()
        demo.clicktonext()
        demo.setpassword()
        demo.setname("aevan")
        demo.setsurname("vaghani")
        demo.setcompanyname("QA Guardians")
        demo.setphone()
        demo.setcountry()
        demo.createaccount()
    })
})